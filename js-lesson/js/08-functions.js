/* --------------------------- FUNCTIONS --------------------------- */

/*
    Un fonction est bloc de code réutilisable
    qui pourra être appelé à partir d'autres parties de votre code pour effectuer une tâche spécifique.
    Les fonctions sont un moyen utile de segmenter votre code en tâches plus petites plus facile à maintenir.
    Elles permettent de réutiliser le même code plusieurs fois sans avoir à le copier coller
*/

// Déclaration de fonction
function greeting() {
    console.log('Hello, ');
}

// Appelle de la fonction (une fonction n'est executé que lorsqu'elle est appelé)
greeting();

// Une fonction peut prendre parametre
function addition(x, y) {
    const result = x + y;
    console.log(`Le resultat de l'addition est ${result}`);
}
// Lorsque l'on appelle la fonction il faut lui passer des vraies valeurs
// Elle executera ce qu'on lui a dit de faire des paramètres dans la définition de la fonction
addition(5657, 800809);

function displayGreetintWithParameter(firstName) {
    console.log(`Bonjour ${firstName}`);
}
displayGreetintWithParameter('rachid');
displayGreetintWithParameter('sofiane');

// Multiplication table
function displayMultplicationTableofNine() {
    for (let i = 0; i < 10; i++) {
        console.log(`${i} x 9 = ${i * 9}`);
    }
}
// displayMultplicationTableofNine();

function displayMultplicationTable(x) {
    for (let i = 0; i < 10; i++) {
        console.log(`${i} x ${x} = ${i * x}`);
    }
}
// displayMultplicationTable(11, 76);

function displayMultplicationTableWithTwoParameters(x, y) {
    for (let i = 0; i < y; i++) {
        console.log(`${i} x ${x} = ${i * x}`);
    }
}
// displayMultplicationTableWithTwoParameters(11, 76);

// CheckEvenOdd Game
const userInput = prompt('Donne moi un nombre');

function checkEvenOdd(x) {
    let response;
    if (x % 2 == 0) {
        response = 'Le nombre est pair';
        return response;
    } else {
        response = 'Le nombre est impair';
        return response;
    }
}
let resultat = checkEvenOdd(userInput);
console.log(resultat);

// FizzBuzz Challenge
userInput = prompt('Donne moi un nombre');

function fizzBuzzCheck(x) {
    let response;
    if (x % 5 === 0 && x % 3 === 0) {
        response = 'Fizzbuzz';
    } else if (x % 3 === 0) {
        response = 'Buzz';
    } else if (x % 5 === 0) {
        response = 'Fizz';
    } else {
        response = "ce nombre ne m'interesse pas";
    }

    return response;
}

let res = fizzBuzzCheck(userInput);
console.log(res);
