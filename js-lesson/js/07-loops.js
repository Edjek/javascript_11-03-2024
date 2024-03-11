/* --------------------------- LOOPS --------------------------- */

// Les boucles sont des structures permettant d'executer plusieurs fois des instructions

// Une boucle a besoin de 3 informations principales:
// initialisation
// condition
// incrementation

// Boucle : while(){...} (tant que)
let i = 0;

while (i < 10) {
    console.log(i);
    i = i + 1;
}

i = 0;

while (i < 10) {
    // let res = i * 8;
    console.log(`${i} x 8 = ${i * 8}`);
    i = i + 1;
}
