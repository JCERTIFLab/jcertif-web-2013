app.factory('i18nService', function () {

    var FR = {
        "header.conference": "CONFÉRENCE",
        "header.city": "IFC (EX-CCF) - Brazzaville",
        "header.date": "9 - 15 Sept. 2013",
        "header.login": "Se connecter",
        "header.nav.home": "Accueil",
        "header.nav.register": "S'inscrire",
        "header.nav.speakers": "Présentateurs",
        "header.nav.sessions": "Sessions",
        "header.nav.cfp": "Proposez un sujet",
        "header.nav.agenda": "Agenda",
        "header.nav.contact": "Contact",
        "home.news": "UNE CONFERENCE SUR PLUSIEURS METIERS ET COMPETENCES",
        "home.sponsors": "NOS SPONSORS",
        "home.newsletter": "NEWSLETTER",
        "home.followus": "SUIVEZ-NOUS",
        "home.actus": "ACTUALITES",
        "home.newsletter.register": "Inscrivez-vous",
        "home.newsletter.input": "Adresse email",
        "home.newsletter.btn": "S'inscrire",
        "form.email": "Email",
        "form.confirmEmail": "Confirmez Email",
        "form.password": "Mot de passe",
        "form.confirmPassword": "Confirmez Mot de passe",
        "form.firstname": "Prénom",
        "form.lastname": "Nom",
        "form.city": "Ville",
        "form.country": "Pays",
        "form.biography": "Bio",
        "form.submit": "S'inscrire",
        "form.submitCfp": "Proposez !",
        'form.title' : 'Titre',
        'form.summary' : 'Résumé',
        'form.description' : 'Description',
        'form.keyword' : 'Mots Clés',
        'form.category' : 'Catégorie',
        'form.password.min' : '6 caractères minimum',
        'form.register.ok' : 'Inscription validée',
        'form.register.ko' : 'Ooops !',
        'form.register.ok.msg' : 'Votre inscription a bien été prise en compte. Vous allez recevoir un email qui vous indiquera les prochaines étapes à suivre.',
        'form.register.ko.msg' : "Une erreur technique est survenue, veuillez nous envoyer un email à l'adresse info@jcertif.com.",
        'form.register.wait' : 'Inscription en cours...Veuillez patienter svp...'
    }

    var EN = {
        'header.conference': 'CONFERENCE',
        'header.city': 'IFC (EX-CCF) - Brazzaville',
        'header.date': '9 - 15 Sept. 2013',
        'header.login': 'Login'
    }

    var currentLang = FR;

    return {
        getText : function(code) {
            return currentLang[code];
        },
        setLang : function(lang) {
            if(currentLang == FR) {
                currentLang = EN;
            } else {
                currentLang = FR;
            }

        }
    };
});