const listMovies = document.querySelector('#list-movies');

listMovies.addEventListener('click', function (e) {
    if (e.target.style.fontSize == '' || e.target.style.fontSize == '16px') {
        e.target.style.fontSize = '35px';
    } else {
        e.target.style.fontSize = '16px';
    }
});

// quand on doucle click sur un element de la liste
// On va creer un h2
// qui aura pour texte le contenu du li
// On l'ajoutera en haut
// On verifiera avant qu'un h2 n'a pas déjà été créé si c'est le cas on le supprime avant d'ajouter le nouveau
