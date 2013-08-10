'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var jcertifConfig = {
        app: 'app',
        dist: 'dist'
    };

    try {
        jcertifConfig.app = require('./bower.json').appPath || jcertifConfig.app;
    } catch (e) {
    }

    grunt.initConfig({
        jcertif: jcertifConfig,
        watch: {
            less : {
                files : ["<%= jcertif.app %>/styles/{,*/}*.less"],
                tasks : ['less:dev']
            },
            livereload: {
                files: [
                    '<%= jcertif.app %>/{,*/}*.html',
                    '{.tmp,<%= jcertif.app %>}/{,*/}*.css',
                    '{.tmp,<%= jcertif.app %>}/{,*/}*.js',
                    '<%= jcertif.app %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
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
                            mountFolder(connect, jcertifConfig.app)
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
                            '<%= jcertif.dist %>/*',
                            '!<%= jcertif.dist %>/.git*'
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
                        '<%= jcertif.dist %>/scripts/{,*/}*.js',
                        '<%= jcertif.dist %>/styles/{,*/}*.css',
                        '<%= jcertif.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= jcertif.dist %>/styles/fonts/*'
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
                        cwd: '<%= jcertif.app %>',
                        dest: '<%= jcertif.dist %>',
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
                    paths: ["<%= jcertif.app %>/styles","<%= jcertif.app %>/components/bootstrap/less"]
                },
                files: {
                    ".tmp/styles/main.css": "<%= jcertif.app %>/styles/main.less"
                }
            },
            dist: {
                options: {
                    paths: ["<%= jcertif.app %>/styles","<%= jcertif.app %>/components/bootstrap/less"],
                    yuicompress: true
                },
                files: {
                    "dist/styles/main.css": "<%= jcertif.app %>/styles/main.less"
                }
            }
        },
        useminPrepare: {
            html: '<%= jcertif.app %>/index.html',
            options: {
                dest: '<%= jcertif.dist %>'
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    '<%= jcertif.app %>/components/es5-shim/es5-shim.js',
                    '<%= jcertif.app %>/components/json3/lib/json3.min.js',
                    '<%= jcertif.app %>/components/angular/angular.min.js',
                    '<%= jcertif.app %>/components/angular-resource/angular-resource.js',
                    '<%= jcertif.app %>/components/angular-cookies/angular-cookies.js',
                    '<%= jcertif.app %>/components/angular-bootstrap/ui-bootstrap.min.js',
                    '<%= jcertif.app %>/components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                    '<%= jcertif.app %>/app.js',
                    '<%= jcertif.app %>/directives/**/*.js',
                    '<%= jcertif.app %>/pages/**/*.js',
                    '<%= jcertif.app %>/services/**/*.js',
                    '<%= jcertif.app %>/filters/**/*.js'

                ],
                dest: 'dist/scripts.js'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                     // https://github.com/jcertif/grunt-usemin/issues/44
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
                    cwd: '<%= jcertif.app %>',
                    src: ['index.html'],
                    dest: '<%= jcertif.dist %>'
                }]
            }
        },
        usemin: {
            html: ['<%= jcertif.dist %>/{,*/}*.html'],
            css: ['<%= jcertif.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= jcertif.dist %>']
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
