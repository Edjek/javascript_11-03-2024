/* --------------------------- SPREAD OPERATOR --------------------------- */

/*
    Décomposition : Le spread operator est un opérateur (...) de décomposition qui permet de décomposer un tableau ou un objet.
    Il est utilisé pour étendre un tableau ou un objet en plusieurs éléments.
*/

// Déclarer un tableau de 5 fruits et 1 tableau de 5 legumes et vous allez creer un tableau food qui va contenir les 2 tableaux
const fruits = ['pomme', 'banane', 'kiwi', 'cerise', 'pêche'];
const vegetables = ['carotte', 'salade', 'celeri', 'potiron', 'haricot'];
let food = [...fruits, ...vegetables];
console.log(food);

food = [...food, 'pasteque']
console.log(food);
// Destructurer le tableau fruit pou recuperer la premiere valeur
const [pomme, banane, ...restFruit] = fruits;
console.log(pomme);
console.log(restFruit);
