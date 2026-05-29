const container = document.getElementById("news-cards");

if (container) {
    const news = [
        {
            name: "RUNNING ORDER",
            image: '/src/assets/img/news/news-runningorder.png',
            date: "12-04-2016",
            text: "Le Running order détaillé incluant les heures de passage des groupes est enfin disponible ! Comme à notre habitude, nous avons fait le maximum pour équ..."
        },
        {
            name: "Interview exclusive pour hellfest.fr:Papa Emeritus III (GHOST)",
            image: "/src/assets/img/news/ghost-news.jpg",
            date: "11-04-2016",
            text: "«Nous sommes en train d’écrire notre propre histoire en ce moment.» – Papa Emeritus III – La Cigale, Paris– 09/12/2015..."
        },
        {
            name: "Interview exclusive pour hellfest.fr: MASS HYSTERIA",
            image: "/src/assets/img/news/masshysteria-news.jpg",
            date: "04-04-2016",
            text: "«&nbsp;Nous sommes en train d’écrire notre propre histoire en ce moment.&nbsp;» – Papa Emeritus III – La Cigale, Paris– 09/12/2015..."
        },
        {
            name: "QUESTIONS ET RÉPONSES HELLFEST 2016 (#ASKHF)",
            image: "/src/assets/img/news/news-livex.png",
            date: "30-03-2016",
            text: "QUESTIONS ET RÉPONSES HELLFEST 2016 ( #ASKHF) L’équipe de Hellfest Productions vous propose une série de questions ouvertes sur Twitter duran..."
        },
        {
            name: "Interview exclusive pour hellfest.fr: Barney Greenway (NAPALM DEATH)",
            image: '/src/assets/img/news/napalm2.jpg',
            date: "28-03-2016",
            text: "«&nbsp;Au Hellfest, notre batteur donnera des cours particuliers d’une demi-heure. 5.000 dollars la leçon&nbsp;!&nbsp;» – Scott Hull &nbsp; Comment ça va, les ..."
        },
        {
            name: "Interview exclusive pour hellfest.fr : AGORAPHOBIC NOSEBLEED",
            image: '/src/assets/img/news/agoraphobic1.jpg',
            date: "21-03-2016",
            text: "«&nbsp;Au Hellfest, notre batteur donnera des cours particuliers d’une demi-heure. 5.000 dollars la leçon&nbsp;!&nbsp;» – Scott Hull &nbsp; Comment ça va, les ..."
        },
        {
            name: "TREMPLIN HELLFEST CULT : THE VOICE OF HELL",
            image: '/src/assets/img/news/cult1.jpg',
            date: "17-03-2016",
            text: "«&nbsp;Au Hellfest, notre batteur donnera des cours particuliers d’une demi-heure. 5.000 dollars la leçon&nbsp;!&nbsp;» – Scott Hull &nbsp; Comment ça va, les ..."
        },
        {
            name: "Interview exclusive pour hellfest.fr: Aaron Aedy (PARADISE LOST)",
            image: '/src/assets/img/news/paradise1.jpg',
            date: "14-03-2016",
            text: "«&nbsp;Le Hellfest un festival vraiment cool. L’ambiance y est bonne&nbsp;!&nbsp;» – Aaron Aedy – 09/11/2015 &nbsp; Comment se passe la journée jusqu’à pré..."
        },
        {
            name: "NO CASH IN HELL:CASHLESS",
            image: '/src/assets/img/news/news-cashless.png',
            date: "13-03-2016",
            text: "La plateforme de précommande Cashless 2016 est désormais ouverte. Nous vous rappelons que depuis 2015, le festival a remplacé les éternels «&nbsp;jetons-t..."
        },
        {
            name: "DOWN > PUSCIFER",
            image: '/src/assets/img/news/news-puscifer.png',
            date: "10-03-2016",
            text: "Suite aux événements récents, nous sommes aux regrets de vous annoncer que DOWN est contraint d’annuler sa venue au Europe et ne participera pas au He..."
        },
        {
            name: "ANTHRAX – 2 interviews exclusives pour hellfest.fr : Charlie Benante and Joey Belladonna",
            image: '/src/assets/img/news/Anthrax1.jpg',
            date: "07-03-2016",
            text: "«&nbsp;Achetez la musique. Ne la volez pas.&nbsp;» – Charlie Benante – 16/12/2015 INTERVIEW #1&nbsp;: CHARLIE BENANTE &nbsp; Qu’est-ce que ça fait d’enchaî..."
        },
        {
            name: "CASIERS & CONSIGNES",
            image: '/src/assets/img/news/news-lockers.png',
            date: "04-03-2016",
            text: "Cette année, pour votre confort, Hellfest remet en place une solution &nbsp;plus importante de consignes et de casiers dans l’enceinte du Metal Corner. Les ..."
        },
        {
            name: "WARM UP TOUR HELLFEST",
            image: '/src/assets/img/news/fly-warm-up-722x1024.jpg',
            date: "02-03-2016",
            text: "Cette année, pour la première fois, l’equipe du Hellfest descend partout en france et vient à ta rencontre. 11 grandes soirées Warm Up officielle..."
        },
        {
            name: "Interview exclusive pour hellfest.fr: Hansi kürsch (BLIND GUARDIAN)",
            image: '/src/assets/img/news/blind1.jpg',
            date: "20-02-2016",
            text: "«&nbsp;Aujourd’hui, à chaque fois qu’on me parle du Hellfest, les gens déclarent que c’est le meilleur festival en Europe&nbsp;» –..."
        },
        {
            name: "SLAYER - 2 inteviews exclusives pour hellfest.fr : Kerry King et Paul Bostaph",
            image: '/src/assets/img/news/salyer1.jpg',
            date: "29-02-2016",
            text: "«&nbsp;Le Hellfest est tellement cool&nbsp;!&nbsp;»&nbsp;– Kerry King – 26/10/2015 INTERVIEW #1 – KERRY KING &nbsp; C’est une longue hi..."
        },
        {
            name: "PASS 1 JOUR SOLD OUT",
            image: '/src/assets/img/news/focus-pass1jour.jpg',
            date: "16-02-2016",
            text: "Les pass 1 jours sont entièrement écoulés, le Hellfest est maintenant complet dans son intégralité !..."
        },
        {
            name: "HELLFEST HEBERGEMENT: LA PLATEFORME",
            image: '/src/assets/img/news/hebergement.jpg',
            date: "16-02-2016",
            text: "Vous êtes riverains du Hellfest, vous cherchez à louer une chambre ou une parcelle de jardin à nos festivaliers. Le Hellfest vous propose une solution :..."
        },
        {
            name: "MOLLAT UNDERGROUND: HELLFEST LE LIVRE",
            image: '/src/assets/img/news/focus-book.jpg',
            date: "19-02-2016",
            text: "Retour sur le Mollat Underground spécial Hellfest, un agréable moment de partage au fil de l’eau sur l’I.Boat, à la découverte de l’e..."
        },
        {
            name: "ATTENTION",
            image: '/src/assets/img/news/news-warning.png',
            date: "30-11-2016",
            text: "NOTE IMPORTANTE : Amis festivaliers, comme vous le savez nous n’avons plus de pass 3 jours disponibles sur nos réseaux et une fois de plus nous vous met..."
        },
        {
            name: "LE HELLFEST CULT EST SOLD OUT!",
            image: '/src/assets/img/news/cult1.jpg',
            date: "06-01-2016",
            text: " "
        },
        {
            name: "RELIVE: REVIVEZ LE HELLFEST",
            image: '/src/assets/img/news/news-relive.png',
            date: "25-01-2016",
            text: "La société Sparkk, spécialisée dans le développement digital, a proposé au Hellfest sa première expérience RE-LIVE : un tout nouveau prototype de v..."
        },
        {
            name: "HELLFEST & ANIMAJE",
            image: '/src/assets/img/news/animaje.jpg',
            date: "23-11-2015",
            text: "Toute l’équipe de HELLFEST PRODUCTIONS&nbsp;remercie l’association ANIMAJE qui participe grandement au succès du festival depuis de nombreuses années. J..."
        },
        {
            name: "LET'S KICK SOME ICE IN HELL",
            image: '/src/assets/img/news/kickIce.jpg',
            date: "12-11-2015",
            text: "Partageant un gout certains pour le spectacle et une volonté constante d’améliorer l’expérience de leur public, le Hellfest et les Corsaires de Nant..."
        },
        {
            name: "FORUM HELLFEST",
            image: '/src/assets/img/news/news-forum.png',
            date: "17-11-2015",
            text: "Amis festivaliers, habitués ou néophytes du Hellfest nous vous rappelons que notre site officiel possède un forum de discussion complet ! Mis à votre d..."
        },
        {
            name: "UN FESTIVAL PROPRE",
            image: '/src/assets/img/news/news-recycle.png',
            date: "05-11-2015",
            text: "HELLFEST – BILAN ENVIRONNEMENT 2015 / CONCOURS ANIMA’GREEN / 4 pass pour 2016 Les équipes d’ANIMA’GREEN (association Animaje), des Connexions ..."
        },
        {
            name: "PREMIERE ANNONCE",
            image: null,
            date: "30-10-2015",
            text: "«&nbsp;Bloody hell&nbsp;!&nbsp;» Ca y est, nous sommes enfin en mesure de vous dévoiler la première grosse vague de groupes qui seront à l’affiche du Hellfest 2..."
        },
        {
            name: "PASS 3 JOURS COMPLETS",
            image: '/src/assets/img/news/sold-out.png',
            date: "30-10-2015",
            text: "Bien que l’ouverture des portes du Hellfest se fasse dans sept mois, nous vous informons que l’intégralité des pass 3 jours ont été écoulés. ( Le..."
        },
        {
            name: "75 %",
            image: '/src/assets/img/news/news-generique.jpg',
            date: "27-10-2015",
            text: "C’est donc vendredi prochain, le 30 octobre, que le HELLFEST révèlera enfin les premiers noms de son affiche 2016…. Le 15 septembre dernier, ..."
        },
        {
            name: "DU FURY FEST AU HELLFEST, TOUTE L'HISTOIRE DU FESTIVAL",
            image: '/src/assets/img/news/hellfest-book.png',
            date: "27-10-2015",
            text: "Le Hellfest ? Le troisième plus gros festival de musique en France. Cet événement majeur et incontournable de la musique Métal est reconnu dans le mond..."
        },
    ];

    news.forEach((item) => {
        container.innerHTML += `
    <article class="card">
    <img src="${item.image}" alt="${item.name}" class="card-img">
    <h2>${item.name}</h2>
    <h3>${item.date}</h3><p>${item.text}</p><p><button>Lire la suite</button></p></article>`;

    })
}