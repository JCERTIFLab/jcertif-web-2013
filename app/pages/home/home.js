'use strict';

app.controller('HomeCtrl', ['$http', '$scope', function ($http, $scope) {
    $scope.carouselInterval = 2000;

    $scope.slides = [
        {image: 'https://lh3.googleusercontent.com/-GgL8kxpsgzU/UHP0fTGipVI/AAAAAAAABHA/U0fiBJO0NIw/w973-h651-no/DSC_0020.jpg'},
        {image: 'https://lh4.googleusercontent.com/-QB5QlRW0GIA/UHP0gloKm6I/AAAAAAAABHQ/5ujOaL-U4YA/w973-h651-no/DSC_0026.jpg'},
        {image: 'https://lh4.googleusercontent.com/-TAFhAN3_qvU/UFqPrUtPg6I/AAAAAAAAAb8/92A7rrQB1Q0/s953/DSC_0268.jpg'},
        {image: 'https://lh6.googleusercontent.com/-Zj1JcJtP4RY/UHP1R5feaRI/AAAAAAAABNg/q7ZURF0VI74/s953/DSC_0146.JPG'}
    ];

    $http.jsonp(backendUrl + '/sponsor/list?jsonp=JSON_CALLBACK')
        .success(function (sponsors) {
            $scope.sponsors = sponsors;
        });
}]);
