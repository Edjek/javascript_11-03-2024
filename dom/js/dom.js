/* --------------------------- DOM MANIPULATION--------------------------- */

/*
    Le DOM (Document Object Model) en Javscript
    est une representation en mémoire d'un document HTML chargé par le navigateur.
    Le DOM represente chaque élément du document HTML comme un objet Javascript
    qui peut être manipulé et modifié à travers le code Javascript
*/

/*
    --------------------------------------------------
    Methodes de selecteurs JavaScript
    --------------------------------------------------
*/

// ? La method `getElementById()`
const paragraphe = document.getElementById('paragraphe');
paragraphe.style.fontStyle = 'italic';
paragraphe.style.fontWeight = 'bold';

// ? La method `getElementsByTagName()`
// `getElementsByTagName()` renvoi une HTMLCollection
// On ne pourra itérer dessus qu'avec la boucle for(){}
const titles = document.getElementsByTagName('h2');
for (let i = 0; i < titles.length; i++) {
    titles[i].style.color = 'pink';
}

// ? La method `getElementsByClassname()`
// `getElementsByClassName()` renvoi une HTMLCollection
// On ne pourra itérer dessus qu'avec la boucle for(){}
const paragrapheWithClass = document.getElementsByClassName('paragraphe');
for (let i = 0; i < paragrapheWithClass.length; i++) {
    paragrapheWithClass[i].style.color = 'brown';
}

// ? La method `querySelector()`
const mainTitle = document.querySelector('h1')
mainTitle.style.fontSize = '50px'

// ? La method `querySelectorAll()`
const paragrapheWithQuerySelector = document.querySelectorAll('p')
console.log(paragrapheWithQuerySelector);

// cibler les element qui ont la class selector-title
// vous allez appliquez sur tous ces  elements
    // css changez la taille du texte pour le mettre en 35px
    // css le texte soit souligné
    // ajouter une class="title"