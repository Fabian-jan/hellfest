const container = document.getElementById("news-cards");

if (container) {
    const news = [
        {
            name: "RUNNING ORDER",
            image: '/src/assets/img/news/news-runningorder.png',
            date: "12-04-2016"
        },
        {
            name: "Interview exclusive pour hellfest.fr:Papa Emeritus III (GHOST)",
            image: "/src/assets/img/news/ghost-news.jpg",
            date: "11-04-2016"
        },
        {
            name: "Interview exclusive pour hellfest.fr: MASS HYSTERIA",
            image:"/src/assets/img/news/masshysteria-news.jpg",
            date: "04-04-2016"
        },
        {
            name: "QUESTIONS ET RÉPONSES HELLFEST 2016 (#ASKHF)",
            image: "/src/assets/img/news/news-livex.png",
            date: "30-03-2016"
        },
        {
            name: "Interview exclusive pour hellfest.fr: Barney Greenway (NAPALM DEATH)",
            image: '/src/assets/img/news/napalm2.jpg',
            date: "28-03-2016"
        },
        {
            name: "Interview exclusive pour hellfest.fr : AGORAPHOBIC NOSEBLEED",
            image: '/src/assets/img/news/agoraphobic1.jpg',
            date: "21-03-2016"
        },
        {
            name: "TREMPLIN HELLFEST CULT : THE VOICE OF HELL",
            image: '/src/assets/img/news/cult1.jpg',
            date: "17-03-2016"
        },
        {
            name: "Interview exclusive pour hellfest.fr: Aaron Aedy (PARADISE LOST)",
            image: '/src/assets/img/news/paradise1.jpg',
            date: "14-03-2016"
        },
        {
            name: "NO CASH IN HELL:CASHLESS",
            image: '/src/assets/img/news/news-cashless.png',
            date: "13-03-2016"
        },
        {
            name: "DOWN > PUSCIFER",
            image: '/src/assets/img/news/news-puscifer.png',
            date: "10-03-2016"
        },
        {
            name: "ANTHRAX – 2 interviews exclusives pour hellfest.fr : Charlie Benante and Joey Belladonna",
            image: '/src/assets/img/news/Anthrax1.jpg',
            date: "07-03-2016"
        },
        {
            name: "CASIERS & CONSIGNES",
            image: '/src/assets/img/news/news-lockers.png',
            date: "04-03-2016"
        },
        {
            name: "WARM UP TOUR HELLFEST",
            image: '/src/assets/img/news/fly-warm-up-722x1024.jpg',
            date: "02-03-2016"
        },
        {
            name: "Interview exclusive pour hellfest.fr: Hansi kürsch (BLIND GUARDIAN)",
            image: '/src/assets/img/news/blind1.jpg',
            date: "20-02-2016"
        },
        {
            name: "SLAYER - 2 inteviews exclusives pour hellfest.fr : Kerry King et Paul Bostaph",
            image: '/src/assets/img/news/salyer1.jpg',
            date: "29-02-2016"
        },
        {
            name: "PASS 1 JOUR SOLD OUT",
            image: '/src/assets/img/news/focus-pass1jour.jpg',
            date: "16-02-2016"
        },
        {
            name: "HELLFEST HEBERGEMENT: LA PLATEFORME",
            image: '/src/assets/img/news/hebergement.jpg',
            date: "16-02-2016"
        },
        {
            name: "MOLLAT UNDERGROUND: HELLFEST LE LIVRE",
            image: '/src/assets/img/news/focus-book.jpg',
            date: "19-02-2016"
        },
        {
            name: "ATTENTION",
            image: '/src/assets/img/news/news-warning.png',
            date: "30-11-2016"
        },
        {
            name: "LE HELLFEST CULT EST SOLD OUT!",
            image: '/src/assets/img/news/cult1.jpg',
            date: "06-01-2016"
        },
        {
            name: "RELIVE: REVIVEZ LE HELLFEST",
            image: '/src/assets/img/news/news-relive.png',
            date: "25-01-2016"
        },
        {
            name: "HELLFEST & ANIMAJE",
            image: '/src/assets/img/news/animaje.jpg',
            date: "23-11-2015"
        },
        {
            name: "LET'S KICK SOME ICE IN HELL",
            image: '/src/assets/img/news/kickIce.jpg',
            date: "12-11-2015"
        },
        {
            name: "FORUM HELLFEST",
            image: '/src/assets/img/news/news-forum.png',
            date: "17-11-2015"
        },
        {
            name: "UN FESTIVAL PROPRE",
            image: '/src/assets/img/news/news-recycle.png',
            date: "05-11-2015"
        },
        {
            name: "PREMIERE ANNONCE",
            image: undefined,
            date: "30-10-2015"
        },
        {
            name: "PASS 3 JOURS COMPLETS",
            image: '/src/assets/img/news/sold-out.png',
            date: "30-10-2015"
        },
        {
            name: "75 %",
            image: '/src/assets/img/news/news-generique.jpg',
            date: "27-10-2015"
        },
        {
            name: "DU FURY FEST AU HELLFEST, TOUTE L'HISTOIRE DU FESTIVAL",
            image: '/src/assets/img/news/hellfest-book.png',
            date: "27-10-2015"
        },
    ];

    news.forEach((item) => {
        container.innerHTML += `
    <article class="card">
    <img src="${item.image}" alt="${item.name}" class="card-img">
    <h2>${item.name}</h2>
    <h3>${item.date}</h3></article>`;
    })
}