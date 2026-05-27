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