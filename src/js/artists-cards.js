
const artists = [
            {
                name: "The Offspring",
                image: "../src/assets/img/artists/artists-cards/the-offspring1-270x152.jpg",
                description: "FRIDAY JUNE 17TH 2016 - MAIN STAGE 2",
                date : "2016-06-18 00:45 > 2016-06-18 02:00",
                day: "FRIDAY",
            },
            {
                name: "Korn",
                image: "../src/assets/img/artists/artists-cards/korn-270x152.jpg",
                description: "SATURDAY JUNE 18TH 2016 - MAIN STAGE 2",
                date : "2016-06-19 01:00 > 2016-06-19 02:00",
                day: "SATURDAY",
            },
            {
                name: "Black Sabbath",
                image: "../src/assets/img/artists/artists-cards/black-sabbath-270x152.jpg",
                description: "SUNDAY JUNE 19TH 2016 - MAIN STAGE 1",
                date : "2016-06-19 23:10 > 2016-06-19 00:40",
                day : "SUNDAY",
            },
            {
                name: "Rammstein",
                image: "../src/assets/img/artists/artists-cards/rammstein-2016-270x152.jpg",
                description: "FRIDAY JUNE 17TH 2016 - MAIN STAGE 1",
                date : "2016-06-17 23:10 > 2016-06-17 00:40",
                day: "FRIDAY",
            },
            {
                name: "Gutterdammerung",
                image: "../src/assets/img/artists/artists-cards/gut-270x152.jpg",
                description: "SATURDAY JUNE 18TH 2016 - WARZONE",
                date : "2016-06-19 01:00 > 2016-06-19 02:00",
                day: "SATURDAY",
            },
            {
                name: "Puscifier",
                image: "../src/assets/img/artists/artists-cards/puscifer-270x152.jpg",
                description: "SUNDAY JUNE 19TH 2016 - VALLEY",
                date : "2016-06-19 23:40 > 2016-06-19 00:40",
                day : "SUNDAY",
            },
            {
                name: "Paradise Lost",
                image: "../src/assets/img/artists/artists-cards/ParadiseLost-270x152.jpg",
                description: "SUNDAY JUNE 19TH 2016 - ALTAR",
                date : "2016-06-19 23:40 > 2016-06-19 00:40",
            },
            {
                name: "Napalm Death",
                image: "../src/assets/img/artists/artists-cards/NapalmDeath-270x152.jpg",
                description: "SATURDAY JUNE 18TH 2016 - ALTAR",
                date : "2016-06-18 23:15 > 2016-06-18 00:15",
                day: "SATURDAY",
            },
            {
                name: "Testament",
                image: "../src/assets/img/artists/artists-cards/Testament-270x152.jpg",
                description: "FRIDAY JUNE 17TH 2016 - ALTAR",
                date : "2016-06-17 23:45 > 2016-06-17 00:45",
                day: "FRIDAY",
            },
            {
                name: "Deicide",
                image:"../src/assets/img/artists/artists-cards/deicide-270x152.jpg",
                description: "FRIDAY JUNE 19TH 2016 - TEMPLE",
                date : "2016-06-18 00:45 > 2016-06-20 01:45",
                day: "FRIDAY",
            },
            {
                name: "Dark Funeral",
                image: "../src/assets/img/artists/artists-cards/DarkFuneral-270x152.jpg",
                description: "SATURDAY JUNE 18TH 2016 - TEMPLE",
                date : "2016-06-19 01:00 > 2016-06-19 02:00",
                day: "SATURDAY",
            },
            {
                name: "Abbath",
                image: "../src/assets/img/artists/artists-cards/abbath-270x152.jpg",
                description: "FRIDAY JUNE 17TH 2016 - TEMPLE",
                date : "2016-06-18 00:50 > 2016-06-18 01:50",
                day: "FRIDAY",
            },
            {
                name: "Fu Manchu",
                image: "../src/assets/img/artists/artists-cards/fumanchu-270x152.jpg",
                description: "SATURDAY JUNE 18TH 2016 - VALLEY",
                date : "2016-06-18 23:15 > 2016-06-18 00:15",
                day: "SATURDAY",
            },
            {
                name: "Ludwig Von 88",
                image: "../src/assets/img/artists/artists-cards/punk-photo-56b89414ae15e-270x152.jpg",
                description: "SATURDAY JUNE 18TH 2016 - WARZONE",
                date : "2016-06-18 22:15 > 2016-06-18 23:10",
                day: "SATURDAY",
            },
            {
                name: "Refused",
                image: "../src/assets/img/artists/artists-cards/231-refused-by-dustin-rabin-2679-270x152.jpg",
                description: "SUNDAY JUNE 19TH 2016 - WARZONE",
                date : "2016-06-20 00:45 > 2016-06-20 01:45",
                day : "SUNDAY",
            },
            {
                name: "King Diamond",
                image: "../src/assets/img/artists/artists-cards/king-diamond-270x152.jpg",
                description: "SUNDAY JUNE 19TH 2016 - MAIN STAGE 2",
                date : "2016-06-20 00:45 > 2016-06-20 02:00",
                day : "SUNDAY",
            },
            {
                name: "Converge",
                image: "../src/assets/img/artists/artists-cards/Converge2-270x152.jpg",
                description: "FRIDAY JUNE 17TH 2016 - WARZONE",
                date : "2016-06-18 00:50 > 2016-06-18 01:50",
                day: "FRIDAY",
            },
            {
                name: "Sunn O))))",
                image: "../src/assets/img/artists/artists-cards/SUNN-O-cred-Peter-Hönneman-2015-270x152.jpg",
                description: "FRIDAY JUNE 17TH 2016 - VALLEY",
                date : "2016-06-17 23:45 > 2016-06-18 00:45",
                day: "FRIDAY",
            },
            {
                name: "Twisted Sister",
                image: "../src/assets/img/artists/artists-cards/TWISTED_SISTER__Tim_Tronckoe-270x152.jpg",
                description: "SARTURDAY JUNE 18TH 2016 - MAIN STAGE 1",
                date : "2016-06-18 23:00 > 2016-06-19 00:15",
                day: "SATURDAY",
            },
        ];
        
const container = document.getElementById("cards-container");

if(container){

    artists.forEach((artist) => {
        container.innerHTML += `
            <article class="card">
                <img src="${artist.image}" alt="${artist.name}">
                <h2>${artist.name}</h2>
                <p class="mobile-text">${artist.description}</p>
                <p class="mobile-text">${artist.date}</p>
            </article>
        `;
    });
}

const days = document.querySelectorAll(".dropdown-jour-semaine li");

days.forEach(function(day) {
    day.addEventListener("click", function() {

        const selectedDay = day.textContent;

        let filteredArtists;

        if (selectedDay === "ALL") {
            filteredArtists = artists;
        } else {
            filteredArtists = artists.filter(function(artist) {
                return artist.day === selectedDay;
            });
        }

        container.innerHTML = "";

        filteredArtists.forEach(function(artist) {
            container.innerHTML += `
                <article class="card">
                    <img src="${artist.image}" alt="${artist.name}">
                    <h2>${artist.name}</h2>
                </article>
            `;
        });

    });
});

const artistsName = [
    "Volbeat",
    "No One Is Innocent",
    "Audrey Horne",
    "Bring Me The Horizon",
    "Disturbed",
    "The Amity Affliction",
    "August Burns Red",
    "Bury Tomorrow",
    "Ghost",
    "Amon Amarth",
    "Sixx Am",
    "Cowards",
    "Harm's Way",
    "Torche",
    "All Pigs Must Die",
    "Wo Fat",
    "With The Dead",
    "Mantar",
    "Jambinai",
    "Saviours",
    "Victims",
    "Stife",
    "Blind Guardian",
    "Hermano",
    "Vision Of Disorder",
    "Architects",
    "Caliban",
    "Heaven Shall Burn",
    "Walls Of Jericho",
    "Kadavar",
    "The Toy Dolls",
    "Melvins",
    "Rival Sons",
    "GoatSnake",
    "Otargos",
    "Earth",
    "Magma",
    "Windhand",
    "Stoned Jesus",
    "Monolord",
    "Killswitch Engage",
    "Kvelertak",
    "Down",
    "Crobot",
    "Hangman's Chair",
    "DopeThrone",
    "Sick Of It All",
    "Dropkick Murphys",
    "Bad Religion",
    "Ludwig Von 88",
    "U.K. Subs",
    "Discharge",
    "Les Sales Majestes",
    "Ratos De Porao",
    "Power Trip",
    "Turnstile",
    "Backtrack",
    "Alea jacta est",
    "Unsane",
    "King Dude",
    "Valkyrie",
    "Lecherous Gaze",
    "StoneBirds",
    "Korpiklaani",
    "Aura Noir",
    "Inquisition",
    "Kampfar",
    "Behexen",
    "Solefald",
    "Moonreich",
    "Cruachan",
    "Primordial",
    "Moonsorrow",
    "Archgoat",
    "Fleshgod Apocalypse",
    "Heidevolk",
    "Dark Fortress",
    "Myrkur",
    "Enslaved",
    "Empyrium",
    "Taake",
    "MGLA",
    "The Vision Bleak",
    "Skalmold",
    "Stille Volk",
    "Hegemon",
    "Overkill",
    "Sacred Reich",
    "Vader",
    "Havok",
    "Sadist",
    "Skeletal remains",
    "Dust Bolt",
    "Witches",
    "Terrorizer",
    "Asphyx",
    "Entombed A.D.",
    "Agoraphobic Nosebleed",
    "Cattle Decapitation",
    "Entrails",
    "Drowned",
    "Undead Prophecies",
    "Katatonia",
    "Grand Magus",
    "Insomnium",
    "Brodequin",
    "The Skull",
    "Fallujah",
    "Agressor",
    "Corrosive Elements",
    "Dirty Fonzy",
    "Vintage Trouble",
    "Atreyu",
    "Orphaned Land",
    "Slayer",
    "Tarja",
    "Nightmare",
    "Megadeth",
    "Municipal waste",
    "Dragonforce",
    "Gojira",
    "Raveneye",
    "Arthemis",
    "Janes's addiction",
    "Foreigner",
    "Within Temptation",
    "Glenn Hughes",
    "Joe Satriani",
    "Hatebreed",
    "Loudness",
    "Le Bal Des Enrages",
    "Mass Hysteria",
    "Turbonegro",
    "The Shrine",
    "Nashville Pussy",
    "Halestorm",
    "Anthrax",
    "Bullet For My Valentine",
    "Delain",
    "Tremonti",
    "ShineDown",
    "Thy Art Is Murder",
]

const containerName = document.querySelector('.artists-container');
artistsName.forEach((artistsName) => {
    const card = document.createElement("div");
        card.classList.add("artist-card");
        card.innerHTML = `<h2>${artistsName}</h2>`;
        containerName.appendChild(card);
})

const dropDownBtn = document.querySelector(".dropdown-btn");
const dropdownJourSemaine = document.querySelector(".dropdown-jour-semaine");

dropDownBtn.addEventListener("click", function (){
    dropdownJourSemaine.classList.toggle("visible");
})