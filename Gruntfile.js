'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    try {
        yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
    } catch (e) {
    }

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            less : {
                files : ["<%= yeoman.app %>/styles/{,*/}*.less"],
                tasks : ['less:dev']
            },
            livereload: {
                files: [
                    '<%= yeoman.app %>/{,*/}*.html',
                    '{.tmp,<%= yeoman.app %>}/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/{,*/}*.js',
                    '<%= yeoman.app %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['livereload']
            }
        },
        connect: {
            options: {
                port: 8000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= yeoman.dist %>/*',
                            '!<%= yeoman.dist %>/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp'
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= yeoman.dist %>/styles/fonts/*'
                    ]
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            'directives/**/*.html',
                            'directives/**/*.js',
                            'pages/**/*.html',
                            'pages/**/*.js',
                            'services/**/*.js',
                            'images/*',
                            'filters/**/*.js',
                            '*.html',
                            '*.js',
                            'styles/**/*.ttf'
                        ]
                    }
                ]
            }
        },
        less: {
            dev: {
                options: {
                    paths: ["<%= yeoman.app %>/styles","<%= yeoman.app %>/components/bootstrap/less"]
                },
                files: {
                    ".tmp/styles/main.css": "<%= yeoman.app %>/styles/main.less"
                }
            },
            dist: {
                options: {
                    paths: ["<%= yeoman.app %>/styles","<%= yeoman.app %>/components/bootstrap/less"],
                    yuicompress: true
                },
                files: {
                    "dist/styles/main.css": "<%= yeoman.app %>/styles/main.less"
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    '<%= yeoman.app %>/components/es5-shim/es5-shim.js',
                    '<%= yeoman.app %>/components/json3/lib/json3.min.js',
                    '<%= yeoman.app %>/components/angular/angular.min.js',
                    '<%= yeoman.app %>/components/angular-resource/angular-resource.js',
                    '<%= yeoman.app %>/components/angular-cookies/angular-cookies.js',
                    '<%= yeoman.app %>/components/angular-bootstrap/ui-bootstrap.min.js',
                    '<%= yeoman.app %>/components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                    '<%= yeoman.app %>/app.js',
                    '<%= yeoman.app %>/directives/**/*.js',
                    '<%= yeoman.app %>/pages/**/*.js',
                    '<%= yeoman.app %>/services/**/*.js',
                    '<%= yeoman.app %>/filters/**/*.js'

                ],
                dest: 'dist/scripts.js'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                     // https://github.com/yeoman/grunt-usemin/issues/44
                     //collapseWhitespace: true,
                     collapseBooleanAttributes: true,
                     removeAttributeQuotes: true,
                     removeRedundantAttributes: true,
                     useShortDoctype: true,
                     removeEmptyAttributes: true,
                     removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: ['index.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        }
    });

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('server', [
        'clean:server',
        'less:dev',
        'livereload-start',
        'connect:livereload',
        'open',
        'watch'
    ]);

    grunt.registerTask('dist', [
        'clean:dist',
        'less:dist',
        'concat:dist',
        'useminPrepare',
        'htmlmin:dist',
        'copy:dist',
        'usemin'

    ]);

    grunt.registerTask('default', ['dist']);
};
