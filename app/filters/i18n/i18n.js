var currentLng = fr_FR;

app.filter('i18n', function () {

        return function (input) {
            return currentLng[input];
        }
    });

