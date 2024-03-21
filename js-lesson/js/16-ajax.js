/* --------------------------- AJAX --------------------------- */

/*
    AJAX (Asynchronous Javascript and XML) est une technique de développement web qui permet de récupérer des données depuis un serveur sans avoir à recharger la page.
*/

/*
    JSON (Javascript Objet Notation) est un format de données textuelles qui est facile à lire et à écrire pour les humains.
*/

// setTimeout est une focntion asynchrone, elle ne bloque pas le déroulement du scripte en attendant de se déclencher.
setTimeout(function () {
    console.log('coucou');
}, 3000);

console.log('salut');

// 1. Créer une AJAX avec XMLHttpRequest (seule cette methode fonctionne sur IE)
// On créer objet de type XMLHttpRequest()
const xhr = new XMLHttpRequest();

xhr.open('get', './js/data.json');

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response);
        console.log(data);
    } else if (xhr.status >= 400 && xhr.status < 600) {
        console.log('Vous avez une erreur');
    }
};

xhr.send();

// 2. Créer une requête AJAX avec fetch
fetch('/js/data.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(`une erreur s'est produite: ${error}`);
    });

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((users) => {
        for (let user of users) {
            const {
                username,
                address: { street, city, zipcode },
            } = user;

            console.log(`${username}  habite au ${street} ${city} ${zipcode}`);
        }
    })
    .catch((error) => {
        console.log(`une erreur s'est produite: ${error}`);
    });

// Creer une requete fetch avec le lien fourni
// destructure les objets PRENOM, RUE, VILLE, CODE, POSTAL
// et vous affichez pour chacun des utilisateur 'PRENOM  habite au RUE VILLE CODE POSTAL
