const container = 
    document.getElementById("cards-container");

if(container){
    const artists = [
            {
                name: "The Offspring",
                image: "../src/assets/img/artists/artists-cards/the-offspring1-270x152.jpg"
            },
            {
                name: "Korn",
                image: "../src/assets/img/artists/artists-cards/korn-270x152.jpg"
            },
            {
                name: "Black Sabbath",
                image: "../src/assets/img/artists/artists-cards/black-sabbath-270x152.jpg"
            },
            {
                name: "Rammstein",
                image: "../src/assets/img/artists/artists-cards/rammstein-2016-270x152.jpg"
            },
            {
                name: "Gutterdammerung",
                image: "../src/assets/img/artists/artists-cards/gut-270x152.jpg"
            },
            {
                name: "Puscifier",
                image: "../src/assets/img/artists/artists-cards/puscifer-270x152.jpg"
            },
            {
                name: "Paradise Lost",
                image: "../src/assets/img/artists/artists-cards/ParadiseLost-270x152.jpg"
            },
            {
                name: "Napalm Death",
                image: "../src/assets/img/artists/artists-cards/NapalmDeath-270x152.jpg"
            },
            {
                name: "Testament",
                image: "../src/assets/img/artists/artists-cards/Testament-270x152.jpg"
            },
            {
                name: "Deicide",
                image:"../src/assets/img/artists/artists-cards/deicide-270x152.jpg"
            },
            {
                name: "Dark Funeral",
                image: "../src/assets/img/artists/artists-cards/DarkFuneral-270x152.jpg"
            },
            {
                name: "Abbath",
                image: "../src/assets/img/artists/artists-cards/abbath-270x152.jpg"
            },
            {
                name: "Fu Manchu",
                image: "../src/assets/img/artists/artists-cards/fumanchu-270x152.jpg"
            },
            {
                name: "Ludwig Von 88",
                image: "../src/assets/img/artists/artists-cards/punk-photo-56b89414ae15e-270x152.jpg"
            },
            {
                name: "Refused",
                image: "../src/assets/img/artists/artists-cards/231-refused-by-dustin-rabin-2679-270x152.jpg"
            },
            {
                name: "King Diamond",
                image: "../src/assets/img/artists/artists-cards/king-diamond-270x152.jpg"
            },
            {
                name: "Converge",
                image: "../src/assets/img/artists/artists-cards/Converge2-270x152.jpg"
            },
            {
                name: "Sunn O))))",
                image: "../src/assets/img/artists/artists-cards/SUNN-O-cred-Peter-Hönneman-2015-270x152.jpg"
            },
            {
                name: "Twisted Sister",
                image: "../src/assets/img/artists/artists-cards/TWISTED_SISTER__Tim_Tronckoe-270x152.jpg"
            },
        ];

    artists.forEach((artist) => {
        container.innerHTML += `
            <article class="card">
                <img src="${artist.image}" alt="${artist.name}">
                <h2>${artist.name}</h2>
            </article>
        `;
    });
}