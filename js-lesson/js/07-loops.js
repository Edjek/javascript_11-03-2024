/* --------------------------- LOOPS --------------------------- */

// ? Les boucles sont des structures permettant d'executer plusieurs fois des instructions

/*
    la principale difference entre `for` et `while` :
    `for` est généralement utilisé lorsque le nombre d'itérations est connu à l'avance
    `while` est utilisé lorsque le nombre d'itérations est inconnu à l'avance et dépend d'une condition spécifique
*/

/*
    Une boucle est composée de 3 parties :
    - Initialisation
    - Condition
    - Incrementation
*/

// Boucle : while(){...} (tant que)
let i = 0;

while (i < 10) {
    console.log(i);
    i = i + 1;
}

// Exercice : Afficher la table de multiplication de 9
let j = 0;

while (j < 10) {
    // let res = j * 8;
    console.log(`${j} x 9 = ${j * 9}`);
    j = j + 1;
}

/*
    Exercice :
    La population de la ville Marrakech est de 1, 000, 000 d’habitants et elle augmente de 50, 000 habitants par an.
    Celle de la ville Agadir est de 500, 000 habitants et elle augmente de 8% par an.
    Ecrire un algorithme permettant de déterminer dans combien d’années la population de la ville Agadir dépassera celle de la ville Marrakech.

    Afficher la phrase : Il faudra X années avant que la population d'agadir dépasse celle de Marrakech
*/
let marrakech = 1000000;
let agadir = 500000;
let k = 0;

while (agadir < marrakech) {
    marrakech = marrakech + 50000;
    agadir = agadir * 1.08;
    k = k + 1;
    // SOLUTION SUCRE SYNTAXIQUE
    // marrakech +=  50000;
    // agadir *= 1.08;
    // k++
}

console.log(
    `Il faudra ${i} années avant que la population d'agadir dépasse celle de Marrakech`
);

/*
    SUCRE SYNTAXIQUE
    k++ on ne peut avancer que de 1 en 1 avec cette façon
    La nouvelle valeur est égale à l'ancienne plus le calcul atttribué
    k += 1;
    k *= 3;
*/

// Boucle : for(){...} (pour)
for (let i = 0; i < 10; i++) {
    console.log(`${i} x 9 = ${i * 9}`);
}

let l = 20;

do {
    console.log(l);
    l++;
} while (l < 10);

// MagicNumber Game
const magicNumber = 125;
let response;

do {
    response = prompt('Donne moi un nombre');
    if (response > magicNumber) {
        console.log('Votre nombre est trop grand');
    } else {
        console.log('Votre est trop petit');
    }
} while (response != magicNumber);

console.log('Bravo');
