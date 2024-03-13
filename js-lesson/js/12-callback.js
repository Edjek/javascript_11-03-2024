/* --------------------------- CALLBACK --------------------------- */

/*
    Une fonction callback est une fonction passée en argument à une autre fonction.
    La fonction qui reçoit la fonction callback en argument, l'appelle à un moment donné dans son code.
    La fonction callback est appelée à l'intérieur de la fonction qui la reçoit en argument.
*/

// Exemple de fonction callback
const addition = function (x, y) {
    return x + y;
};

// La fonction mathematique prend en parametre deux nombres et une fonction callback
// Elle appelle et retourne le resultat de la fonction addition
function mathematique(x, y, callback) {
    return callback(x, y);
}

const resultat = mathematique(12, 14, addition);
console.log(resultat);

// On peut aussi passer une fonction anonyme en argument directement
mathematique(1454, 786, function (a, b) {
    return (a * a) / b;
});

// Exemple de fonction callback avec un tableau
let fruits = ['banane', 'fraise', 'pomme', 'kiwi'];
let vegetables = ['patate douce', 'carotte', 'celeri', 'tomate'];

// La fonction foreach prend en parametre un tableau et une fonction callback
// Elle appelle la fonction callback pour chaque element du tableau
function foreach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

foreach(vegetables, function (e) {
    console.log(e);
});

foreach(fruits, function (e) {
    console.log('le fruit est ' + e);
});
