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
    ];

    news.forEach((item) => {
        container.innerHTML += `
    <article class="card">
    <img src="${item.image}" alt="${item.name}" class="card-img">
    <h2>${item.name}</h2>
    <h3>${item.date}</h3></article>`;
    })
}