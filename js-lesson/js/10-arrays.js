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

// Les tableaux peuvent contenir des tableaux
// Ils peuvent être multidimensionnels
const multiArray = ['texte', 12, true, ['lion', 'tigre', 'aigle']];
// Pour acceder à un valeur bien penser à cibler l'index dans l'index
console.log(multiArray[3][1]);

// Réaffecter la valeur d'une case d'un tableau
multiArray[3][1] = 'tortue';

// * Pour connaitre la longueur d'un element nous pouvons utiliser la propriété .length
// console.log(fruits.length);

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
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// displayArray(fruits);
// displayArray(monthsInFrench);

const notesCda = [
    ['philippe', 12, 11, 15, 16],
    ['laetitia', 12, 14, 18, 14],
    ['gerson', 12, 10, 18, 20],
];

const notesDw = [
    ['arabe', 12, 15, 15, 17],
    ['lamine', 19, 14, 17, 15],
    ['mickael', 9, 10, 18, 20],
];

// Regardez dans le tableau si y'a un eleve qui s'appelle philippe, si c'est le cas vous faites la moyenne des notes de philippe
function studentAverage(array, studentFirstName) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === studentFirstName) {
            let moyenne = 0;

            for (let j = 1; j < array[i].length; j++) {
                moyenne = moyenne + array[i][j];
            }
            moyenne = moyenne / (array[i].length - 1);
            console.log(moyenne);
        }
    }
}

// Modifierez la fonction pour qu'elle puisse prendre en parametre un prenom et un tableau
studentAverage(notesCda, 'gerson');
studentAverage(notesCda, 'laetitia');
studentAverage(notesDw, 'lamine');
