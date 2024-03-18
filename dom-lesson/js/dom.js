/* --------------------------- DOM MANIPULATION--------------------------- */

/*
    Le DOM (Document Object Model) en Javscript
    est une representation en mémoire d'un document HTML chargé par le navigateur.
    Le DOM represente chaque élément du document HTML comme un objet Javascript
    qui peut être manipulé et modifié à travers le code Javascript
*/

/*
    --------------------------------------------------
    Méthodes de selecteurs JavaScript
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
    titles[i].style.color = 'salmon';
}

// ? La method `getElementsByClassname()`
// `getElementsByClassName()` renvoi une HTMLCollection
// On ne pourra itérer dessus qu'avec la boucle for(){}
const paragrapheWithClass = document.getElementsByClassName('paragraphe');
for (let i = 0; i < paragrapheWithClass.length; i++) {
    paragrapheWithClass[i].style.color = 'snow';
}

// ? La method `querySelector()`
const mainTitle = document.querySelector('h1');
mainTitle.style.textAlign = 'center';
mainTitle.style.fontSize = '50px';

// ? La method `querySelectorAll()`
const paragrapheWithQuerySelector = document.querySelectorAll('p');
for (const paragraphe of paragrapheWithQuerySelector) {
    paragraphe.style.backgroundColor = 'pink';
    paragraphe.style.padding = '20px'
}

const selectorTitle = document.querySelectorAll('.selector-title');
selectorTitle.forEach(function (x) {
    x.style.fontSize = '35px';
    x.style.textDecoration = 'underline';
    x.classList.add('title');
});

/*
    --------------------------------------------------
    Quelques propriétés liées aux éléments du DOM
    --------------------------------------------------
*/

// La propriété `style` permet de modifier le style
mainTitle.style.textTransform = 'uppercase';

// La méthode `classList.add()` permet d'ajouter une classe à un élément HTML.
mainTitle.classList.add('title');

// La méthode `classList.remove()` permet d'ajouter une classe à un élément HTML.
mainTitle.classList.remove('title');

// La méthode `classList.contains()` permet de vérifier si un élément HTML possède une classe donnée.
const response = mainTitle.classList.contains('selector-title');
// console.log(response);

// La propriété `textContent` permet de récupérer ou de définir le contenu textuel d'un élément HTML.
mainTitle.textContent = "<em>C'est pas si dur le Js</em>";

// La propriété `innerHTML` permet de récupérer ou de définir le contenu HTML d'un élément HTML (le HTML est interprété).
mainTitle.innerHTML = "<em>C'est pas si dur le Js</em>";

// La méthode `setAttribute()` permet de définir la valeur d'un attribut HTML.
mainTitle.setAttribute('id', 'id-js');

// La method `remove()` permet de supprimer un element
const elementDelete = document.querySelector('#delete');
elementDelete.remove();

/*
    -------------------------------------------
    Créer des elements en Javascript
    -------------------------------------------
*/
const newParagraphe = document.createElement('p');
newParagraphe.textContent = 'Je suis un paragraphe créé en JS';
newParagraphe.classList.add('paragraphe');

const mainParagraphe = document.querySelector('#main-paragraphe');

// `append()` ajoute un element à la fin
// `prepend()` ajoute un element au debut
mainParagraphe.prepend(newParagraphe);

/*
    -------------------------------------------
    Les évènements (events) en Javascript
    -------------------------------------------
    ? En javascript les évènements permettent d'intéragir avec les actions de l'utilisateur sur une page web, telles que le click, le scroll...
    -------------------------------------------
    la méthode addEventListener() permet de définir un écouteur d'évènement sur un élément HTML.
    Cet écouteur est appelé chaque fois que l'évènement spécifié se produit sur l'élément.
    -------------------------------------------
    La method addEventListener() prend 2 paramètre :
    1. Le nom de l'évènement (click, dblclick, mouseover, submit, ...).
    2. Une fonction callback qui sera appelé à chaque fois que l'évènement est déclenché.
*/

mainTitle.addEventListener('click', function () {
    //    const title = document.querySelector('#title-js')
    //    title.remove()
});

mainTitle.addEventListener('dblclick', function () {
    const paragraphe = document.createElement('p');
    paragraphe.textContent = 'je suis un paragraphe creer lors du click du h1';

    mainParagraphe.append(paragraphe);
});
