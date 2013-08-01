'use strict';

app.controller('HomeCtrl', ['$http', '$scope', 'backendService', function ($http, $scope, backendService) {
    $scope.carouselInterval = 7000;

    $scope.slides = [
        {image: 'images/banner.png'},
        {image: 'images/slide1.jpg'},
        {image: 'images/slide2.jpg'}
    ];

    backendService.getSponsors(function(sponsorsList) {
       $scope.sponsors = sponsorsList;
   });

   !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

}]);
