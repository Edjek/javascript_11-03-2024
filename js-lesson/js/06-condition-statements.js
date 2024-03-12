/* --------------------------- CONDITIONAL STATEMENTS --------------------------- */

// Les opérateurs de comparaison (==, !=, >, >=, <, <=, ===, !==)

const condition = 17;

/*
    Le type booléen correspond à la valeur renvoyée lorsque l'on effectue un test sur des variables
    Si la condition est vraie (truthy), le bloc d'instruction est executé
    Si la condition est fausse (falsy), le bloc d'instruction est ignoré (0 et '' sont considérés comme falsy)
*/

if (condition != 18) {
    console.log('Vous êtes majeur');
}

// Si, Sinon (if, else)
if (condition < 18) {
    console.log('Vous êtes mineur');
} else {
    console.log('Vous êtes majeur');
}

// Si, Sinon Si, Sinon (if, else if, else)
if (condition < 18) {
    console.log('Tu es un ado');
} else if (condition < 5) {
    console.log('Tu es un enfant');
} else if (condition < 40) {
    console.log('Tu es un quadra');
} else {
    console.log('Tu es trop vieux pour moi');
}

// Les opérateurs logiques OU (||) et ET (&&)
const animal = prompt('Quel est votre animal préféré?');

if (animal === 'chien' && condition >= 18) {
    console.log("Vous êtes quelqu'un de bien");
} else if (animal === 'chat' || animal === 'félin') {
    console.log("Quelle drole d'idée");
} else if (animal === 'poisson rouge') {
    console.log('Je ne veux plus parler avec toi');
} else {
    console.log("Je n'ai pas compris la reponse");
}

// FizzBuzz Game
let userInput = prompt('Donnez moi un nombre');

if (userInput % 5 === 0 && userInput % 3 === 0) {
    console.log('Fizzbuzz');
} else if (userInput % 3 === 0) {
    console.log('Buzz');
} else if (userInput % 5 === 0) {
    console.log('Fizz');
} else {
    console.log("ce nombre ne m'interesse pas");
}

const userAge = prompt('Quel est ton age?');

if (userAge < 13) {
    console.log('Tu peux voir Action Man');
} else if (userAge >= 13 && userAge <= 18) {
    console.log('Tu peux voir Matrix');
} else {
    console.log('Tu peux voir Evil Dead');
}

// switch(){...}
// Switch permet de verifier uniquement sur une seule valeur les égalités
// Cela permet parfois d'être plus lisible mais son usage limité
let age = 18;

switch (age) {
    case 18:
        console.log('Vous avez 18 ans');
        break;
    case 5:
        console.log('Vous avez 5 ans');
        break;
    case 10:
        console.log('Voua avez 10 ans');
        break;
    default:
        console.log('Je ne connais pas votre age');
}

const newAnimal = prompt('Quel est votre animal préféré ?');

switch (newAnimal) {
    case 'chien':
        console.log("Vous etes qq'un de bien");
        break;
    case 'chat':
        console.log("Quelle drole d'idée");
        break;
    case 'poisson rouge':
        console.log('Je ne veux plus parler avec toi');
        break;
    default:
        console.log('pas compris');
}
