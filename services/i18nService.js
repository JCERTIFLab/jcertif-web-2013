app.factory('i18nService', function () {

    var FR = {
        "header.conference": "CONFÉRENCE",
        "header.city": "IFC (EX-CCF) - Brazzaville",
        "header.date": "9 - 15 Sept. 2013",
        "header.login": "Se connecter",
        "header.logout": "Se déconnecter",
        "header.nav.home": "Accueil",
        "header.nav.register": "S'inscrire",
        "header.nav.speakers": "Présentateurs",
        "header.nav.sessions": "Sessions",
        "header.nav.cfp": "Proposez un sujet",
        "header.nav.agenda": "Agenda",
        "header.nav.contact": "Contact",
        "home.news": "Une Conférence sur plusieurs Métiers et Compétences",
        "home.sponsors": "Nos Sponsors",
        "home.newsletter": "NEWSLETTER",
        "home.followus": "Suivez-Nous",
        "home.actus": "Actualités",
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
        'form.send' : 'Envoyer',
        'form.reinitemail.ko' : 'Veuillez saisir un email valide',
        'form.reinitemail.ok' : 'Votre nouveau mot de passe a été envoyé',
        'cfp.speaker' : 'Qui êtes vous ?',
        'cfp.paper' : 'Votre sujet',
        'cfp.notlogged' : "Vous devez vous inscrire pour proposer un sujet.",
        'agenda.day' : 'Jour',
        'session.keyword' : 'Mots Clés',
        'form.register.info' : "Veuillez remplir ce formulaire pour vous inscrire à l'événement JCertif 2013",
        'form.register.notsignup' : 'Pas encore inscrit ?',
        'form.register.alreadysignup' : 'Déjà inscrit ?',
        'form.register.pleaselogin' : 'Veuillez vous connecter !',
        'form.register.forgetpass' : 'Mot de passe oublié ?',
        'form.register.alreadysignin' : 'Vous êtes déjà authentifié !',
        'form.password.minlength' : 'Attention le mot de passe doit être de 6 caractères minimum',
        'form.badlogin' : 'Les informations fournies ne nous permettent pas de vous authentifier'
    }

    var EN = {
        'header.conference': 'CONFERENCE',
        'header.city': 'IFC (EX-CCF) - Brazzaville',
        'header.date': '9 - 15 Sept. 2013',
        'header.login': 'Login',
        "header.logout": "Logout",
        "header.nav.home": "Home",
        "header.nav.register": "Sign Up",
        "header.nav.speakers": "Speakers",
        "header.nav.sessions": "Sessions",
        "header.nav.cfp": "Submit a paper",
        "header.nav.agenda": "Agenda",
        "header.nav.contact": "Contact",
        "home.news": "One Event, Many Opportunities",
        "home.sponsors": "Our Sponsors",
        "home.newsletter": "NEWSLETTER",
        "home.followus": "Follow Us",
        "home.actus": "News",
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
        'form.send' : 'Send',
        'form.reinitemail.ko' : 'Email is invalid',
        'form.reinitemail.ok' : 'Your new password was sent.',
        'cfp.speaker' : 'Who are you ?',
        'cfp.paper' : 'Your proposal',
        'cfp.notlogged' : "You must signup before.",
        'agenda.day' : 'Day',
        'session.keyword' : 'Keyword',
        'form.register.info' : "Please, fill form to sign up",
        'form.register.notsignup' : 'Never sign up ?',
        'form.register.alreadysignup' : 'Already registered ?',
        'form.register.pleaselogin' : 'Login',
        'form.register.forgetpass' : 'Password Forgotten ?',
        'form.register.alreadysignin' : 'You are already sign in !',
        'form.password.minlength' : 'Password : 6 characters min',
        'form.badlogin' : 'Bad login'
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
