'use strict';

app.directive('jcTwitter', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/social/twitter/twitter.html',
        link: function (scope, element, attributes) {
            !function(d,s,id){
                var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';

                js=d.createElement(s);
                js.id=id;
                js.src=p+"://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js,fjs);

            }(document,"script","twitter-wjs");
        }
    };
});