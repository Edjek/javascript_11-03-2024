/* --------------------------- AJAX POST --------------------------- */

// 1. Créer une requête AJAX POST avec XMLHttpRequest
const newPost = {
    title: 'Mon nouvel article',
    body: 'Un article qui parle de blablabla',
    userId: 2,
};

const xhrPost = new XMLHttpRequest();

xhrPost.open('post', 'https://jsonplaceholder.typicode.com/posts');

// On doit lorsque l'on envoie des donnéees sur le serveur préciser le type de données dans l'entête de la requête.
xhrPost.setRequestHeader('Content-Type', 'application/json');

xhrPost.onload = function () {
    if (xhrPost.status >= 200 && xhrPost.status < 300) {
        const data = JSON.parse(xhrPost.response);
        console.log(data);
    } else if (xhrPost.status >= 400 && xhrPost.status < 600) {
        console.log('Vous avez une erreur');
    }
};

// On doit transformer notre objet en JSON avant de l'envoyer au serveur
xhrPost.send(JSON.stringify(newPost));

// 2. Créer une requête AJAX POST avec fetch()
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(newPost),
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
