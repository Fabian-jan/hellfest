
// Cette fonction permet de charger un composant HTML à partir d'une URL et de l'insérer dans un élément ciblé

/* 
export : permet d'exporter la fonction pour qu'elle puisse être utilisée dans d'autres modules
async : opération asynchrone
loadComponent : nom de la fonction
targetSelector : sélecteur CSS de l'élément cible où le composant sera inséré
url : URL du composant HTML à charger
*/

export async function loadComponent(targetSelector, url) {
    
    // ici, on sélectionne l'élément cible dans le DOM à l'aide du sélecteur fourni
    const target = document.querySelector(targetSelector);

    // si l'élément cible n'est pas trouvé, on affiche un avertissement dans la console et on arrête l'exécution de la fonction
    if (!target) {
        console.warn("Conteneur introuvable pour :" + targetSelector);
        return;
    }

    // on utilise fetch pour récupérer le contenu du composant à partir de l'URL fournie et on attend la réponse
    const response = await fetch(url);

    // si la réponse n'est pas ok (par exemple, si le composant n'a pas pu être chargé), on lance une erreur avec un message indiquant le problème
    if (!response.ok) {
        console.error("Erreur lors du chargement du composant :" + url);
    }

    // si la réponse est ok, on lit le contenu de la réponse en tant que texte (HTML) et on attend que cette opération soit terminée
    const html = await response.text();

    // enfin, on insère le contenu HTML récupéré dans l'élément cible en utilisant innerHTML
    target.innerHTML = html;


}