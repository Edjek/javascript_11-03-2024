/* --------------------------- ARRAYS --------------------------- */

/*
    ? Un tableau 'array' est une structure de donnée qui peut contenir plusieurs éléments
    On peut créer une tableau en utilisant les crochets [] et en y insérant des éléments séparés par des virgules]
*/

// * Déclarer un tableau vide
const emptyArray = [];

const fruits = ['pomme', 'banane', 'orange'];
// * On peut accéder à un élément du tableau en utilisant son index numérique.
// L'index du premier élément est toujours 0.
console.log(fruits[0]);

const multiArray = ['texte', 12, true, ['lion', 'tigre', 'aigle']];
console.log(multiArray[3][1]);

// Réaffecter la valeur d'une case d'un tableau
multiArray[3][1] = 'tortue';

// * Pour connaitre la longueur d'un element nous pouvons utiliser la propriété .length
console.log(fruits.length);

// Declarer un tableau qui contient tous les mois de l'année
const monthsInFrench = [
    'janvier',
    'fevrier',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'decembre',
];
// Affichez janvier et decembre
// console.log(monthsInFrench[0], monthsInFrench[11]);

for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
}

for (let i = 0; i < monthsInFrench.length; i++) {
    // console.log(monthsInFrench[i]);
}

// creer une fonction displayArray
// Afficher tous les mois de l'année
function displayArray(array) {
    for (let i = 0; i < monthsInFrench.length; i++) {
        console.log(monthsInFrench[i]);
    }
}

displayArray();
displayArray();
