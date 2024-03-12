/* --------------------------- LOOPS --------------------------- */

// Une boucle est une structure de controle qui permet de repeter plusieurs fois des instructions

// Une boucle est composée de 3 parties :
// Initialisation
// Condition
// Incrementation

// Boucle : while(){...} (tant que)
// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i = i + 1;
// }

// let j = 0;

// while (j < 10) {
//     // let res = j * 8;
//     console.log(`${j} x 9 = ${j * 9}`);
//     j = j + 1;
// }

/*
    La population de la ville Marrakech est de 1, 000, 000 d’habitants et elle augmente de 50, 000 habitants par an.
    Celle de la ville Agadir est de 500, 000 habitants et elle augmente de 8% par an.
    Ecrire un algorithme permettant de déterminer dans combien d’années la population de la ville Agadir dépassera celle de la ville Marrakech.

    Afficher la phrase : Il faudra X années avant que la population d'agadir dépasse celle de Marrakech
*/
let marrakech = 1000000;
let agadir = 500000;
let i = 0;

while (agadir < marrakech) {
    marrakech = marrakech + 50000;
    agadir = agadir * 1.08;
    i = i + 1;
    // SOLUTION SUCRE SYNTAXIQUE
    // marrakech +=  50000;
    // agadir *= 1.08;
    // i++

    // SUCRE SYNTAXIQUE
    // i++ on ne peut avancer que de 1 en 1 avec cette façon
    // La nouvelle valeur est égale à l'ancienne plus le calcul atttribué
    // i += 1;
    // i *= 3;
}

console.log(
    `Il faudra ${i} années avant que la population d'agadir dépasse celle de Marrakech`
);
