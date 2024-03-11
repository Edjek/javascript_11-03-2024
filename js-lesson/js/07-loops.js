/* --------------------------- LOOPS --------------------------- */

// Une boucle est une structure de controle qui permet de repeter plusieurs fois des instructions

// Une boucle est composée de 3 parties :
// Initialisation
// Condition
// Incrementation

// Boucle : while(){...} (tant que)
let i = 0;

while (i < 10) {
    console.log(i);
    i = i + 1;
}

let j = 0;

while (j < 10) {
    // let res = j * 8;
    console.log(`${j} x 8 = ${j * 8}`);
    j = j + 1;
}
