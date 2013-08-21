'use strict';

app.controller('HomeCtrl', ['$http', '$scope', 'backendService', function ($http, $scope, backendService) {
    $scope.carouselInterval = 7000;

    $scope.slides = [
        {image: 'images/banner.jpg'},
        {image: 'images/slide1.jpg'},
        {image: 'images/slide2.jpg'}
    ];

    backendService.getSponsors(function (sponsorsList) {
        var sponsorLevel1 = [];
        var sponsorLevel2 = [];
        var sponsorLevel3 = [];
        angular.forEach(sponsorsList, function (sponsor) {
            if (sponsor.level == 'Titanium' || sponsor.level == 'Platine') {
                sponsorLevel1[sponsorLevel1.length] = sponsor;
            } else if (sponsor.level == 'Or' || sponsor.level == 'Argent') {
                sponsorLevel2[sponsorLevel2.length] = sponsor;
            } else {
                sponsorLevel3[sponsorLevel3.length] = sponsor;
            }
        });
        $scope.sponsorsLevel1 = sponsorLevel1;
        $scope.sponsorsLevel2 = sponsorLevel2;
        $scope.sponsorsLevel3 = sponsorLevel3;
    });
}]);
