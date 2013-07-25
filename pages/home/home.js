'use strict';

app.controller('HomeCtrl', ['$http', '$scope', 'backendService', function ($http, $scope, backendService) {
    $scope.carouselInterval = 2000;

    $scope.slides = [
        {image: 'images/jcertif_express.png', title : 'JCertif Express 2013'},
        {image: 'https://lh4.googleusercontent.com/-QB5QlRW0GIA/UHP0gloKm6I/AAAAAAAABHQ/5ujOaL-U4YA/w973-h651-no/DSC_0026.jpg', title : 'Africa Android Challenge'},
        {image: 'https://lh4.googleusercontent.com/-TAFhAN3_qvU/UFqPrUtPg6I/AAAAAAAAAb8/92A7rrQB1Q0/s953/DSC_0268.jpg', title : 'JCertif Lab'},
        {image: 'https://lh6.googleusercontent.com/-Zj1JcJtP4RY/UHP1R5feaRI/AAAAAAAABNg/q7ZURF0VI74/s953/DSC_0146.JPG', title : 'JCertif 2012'}
    ];

    backendService.getSponsors(function(sponsorsList) {
       $scope.sponsors = sponsorsList;
   });


    backendService.getSpeakers(function(speakersList) {
        $scope.speakers = speakersList;
    });
}]);
