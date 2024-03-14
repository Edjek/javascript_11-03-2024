/* --------------------------- ARRAY FUNCTIONS --------------------------- */

// ? Attention la plupart des methodes dans ce fichier modifient le tableau d'origine

// Créer un tableau d'animaux ('chat', 'chien', 'tigre', 'lion', 'requin','panda')

const animals = ['chat', 'chien', 'tigre', 'lion', 'requin', 'panda'];

// Afficher la longueur du tableau
console.log(animals.length);

// * Ajouter un ou plusieurs éléments à la fin d'un tableau
// Renvoie la nouvelle longueur du tableau
let returnArray = animals.push('dauphin', 'loup');
// console.log(returnArray);

// * Supprimer le dernier éléments à la fin d'un tableau
// Renvoie l'élément supprimé
returnArray = animals.pop();
// console.log(returnArray);

// * Ajouter un ou plusieurs éléments au début d'un tableau
// Renvoie la nouvelle longueur du tableau
returnArray = animals.unshift('hiboux');
// console.log(returnArray);

// * Supprimer le premier élément au début d'un tableau
//  Renvoie l'élément supprimé
returnArray = animals.shift();
// console.log(returnArray);

// * Réorganiser le tableau de la fin vers le début
animals.reverse();

// * Modifier ou Ajouter ou Supprimer un élément dans un tableau
// Ajouter
animals.splice(2, 0, 'raton laveur');

// Modifier
animals.splice(6, 1, 'aigle');

// Supprimer 'requin'
animals.splice(3, 1);

// Renvoyer l'index d'un element ou -1 s'il n'existe pas
const indexOfTiger = animals.indexOf('tigre');
// console.log(indexOfTiger);

let fruits = ['banane', 'fraise', 'pomme', 'kiwi'];
let vegetables = ['patate douce', 'carotte', 'celeri', 'tomate'];

// * On peut concaténer deux tableaux
// Retourne un nouveau tableaux
const food = fruits.concat(vegetables);
// console.log(food);

/* --------------------------- ARRAY ITERATION --------------------------- */

// ? Boucle `for(){}` permet de parcourir les éléments d'un tableau (itérable)
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
}

// ? Boucle for(...of...){} depuis ES6
for (let fruit of fruits) {
    // console.log(fruit);
}

for (let vegetable of vegetables) {
    // console.log(vegetable);
}

// ? Boucle `foreach(){}` est une méthode Javascript qui permet de parcourir les éléments d'un tableau
fruits.forEach(function (fruit) {
    // console.log(fruit);
});

vegetables.forEach(function (vegetable) {
    console.log(vegetable);
});

/* --------------------------- EXERCICES --------------------------- */

const capitalCities = [
    'Paris',
    'Berlin',
    'Rome',
    'Moscou',
    'Londres',
    'Madrid',
];

function modifyArraycapitalCities(array) {
    array.pop();
    array.unshift('Vienne');
    const indexOfRome = array.indexOf('Rome');
    array.splice(indexOfRome, 1, 'Alger');

    return array.length;
}

const returnModifyArrayCapitalCities = modifyArraycapitalCities(capitalCities);
console.log(returnModifyArrayCapitalCities);

/*
    Créer une fonction fléché meteo qui prend en parametre la saison et la temperature
        Retourne Nous sommes en hiver et il fait -1 degré
        degré s'accorde avec temperature ("s" au pluriel / sans au singulier)
        l'article s'accorde avec la saison ("au" printemps)

        Afficher le resultat
*/

const meteo = (saison, temperature) => {
    let article = 'en';
    let degre = 'degrés';

    if (saison === 'printemps') {
        article = 'au';
    }

    if (temperature >= -1 && temperature <= 1){
        degre = 'degré'
    }

    return `Nous sommes ${article} ${saison} et il fait ${temperature} ${degre}`;
};

const response = meteo('été', 56);
console.log(response);
