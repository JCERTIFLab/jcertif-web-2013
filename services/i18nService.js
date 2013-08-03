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
        "form.email": "Email",
        "form.password": "Mot de passe",
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
        'form.register.wait' : 'Inscription en cours...Veuillez patienter svp...',
        'cfp.speaker' : 'Qui êtes vous ?',
        'cfp.paper' : 'Votre sujet',
        'agenda.day' : 'Jour',
        'form.register.info' : "Veuillez remplir ce formulaire pour vous inscrire à l'événement JCertif 2013"
    }

    var EN = {
        'header.conference': 'CONFERENCE',
        'header.city': 'IFC (EX-CCF) - Brazzaville',
        'header.date': '9 - 15 Sept. 2013',
        'header.login': 'Login',
        "header.nav.home": "Home",
        "header.nav.register": "Sign Up",
        "header.nav.speakers": "Speakers",
        "header.nav.sessions": "Sessions",
        "header.nav.cfp": "Submit a paper",
        "header.nav.agenda": "Agenda",
        "header.nav.contact": "Contact",
        "home.news": "ONE EVENT, MANY OPPORTUNITIES",
        "home.sponsors": "OUR SPONSORS",
        "home.newsletter": "NEWSLETTER",
        "home.followus": "FOLLOW US",
        "home.actus": "NEWS",
        "form.email": "Email",
        "form.password": "Password",
        "form.firstname": "First Name",
        "form.lastname": "Last Name",
        "form.city": "City",
        "form.country": "Country",
        "form.biography": "Bio",
        "form.submit": "Sign Up",
        "form.submitCfp": "Submit !",
        'form.title' : 'Title',
        'form.summary' : 'Summary',
        'form.description' : 'Description',
        'form.keyword' : 'Keywords',
        'form.category' : 'Category',
        'form.password.min' : '6 characters min',
        'form.register.ok' : 'Your profile was created',
        'form.register.ko' : 'Ooops !',
        'form.register.ok.msg' : 'Your subscription has been registered. You will receive an email indicating the following steps',
        'form.register.ko.msg' : "Something wrongs... Please contact info@jcertif.com",
        'form.register.wait' : 'Sign up in progress... please wait',
        'cfp.speaker' : 'Who are you ?',
        'cfp.paper' : 'Your proposal',
        'agenda.day' : 'Day',
        'form.register.info' : "Please, fill form to sign up"
    }

    var currentLang = FR;

    return {
        getText : function(code) {
            return currentLang[code];
        },
        setLang : function(lang) {
            if(lang == 'FR') {
                currentLang = FR;
            } else {
                currentLang = EN;
            }
        },
        getCurrentLang : function() {
            if(currentLang == FR) {
                return 'FR';
            } else {
                return 'EN';
            }
        }
    };
});