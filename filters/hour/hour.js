app.filter('hour', function () {
    return function (input) {
        return input.substr(10, 6);
    }
});