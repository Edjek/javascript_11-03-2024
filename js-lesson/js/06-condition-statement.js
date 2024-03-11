/* --------------------------- CONDITIONAL STATEMENTS --------------------------- */

// Les opérateurs de comparaison (==, !=, >, >=, <, <=, ===, !==)

const condition = 17;

// Le type booléen correspond à la valeur renvoyée lorsque l'on effectue un test sur des variables
// Si la condition est vraie (thruthy), le bloc d'instruction est executé
// Si la condition est fausse (falsy), le bloc d'instruction est ignoré (0 et '' sont considérés comme falsy)
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

// const animal = prompt('Quel est votre animal préféré?');

// // Les opérateurs logiques OU (||) et ET (&&)
// if (animal === 'chien' && condition >= 18) {
//     console.log("Vous êtes quelqu'un de bien");
// } else if (animal === 'chat' || animal === 'félin') {
//     // ou les félin
//     console.log("Quelle drole d'idée");
// } else if (animal === 'poisson rouge') {
//     console.log('Je ne veux plus parler avec toi');
// } else {
//     console.log("Je n'ai pas compris la reponse");
// }

// FizzBuzz Game
// let userInput = prompt('Donnez moi un nombre');

// if (userInput % 5 === 0 && userInput % 3 === 0) {
//     console.log('Fizzbuzz');
// } else if (userInput % 3 === 0) {
//     console.log('Buzz');
// } else if (userInput % 5 === 0) {
//     console.log('Fizz');
// } else {
//     console.log('ce nombre ne m\'interesse pas');
// }

// Ecrire un algorithme qui demande à l'utilisateur son age. Il indique ensuite à l'utilisateur quel film il peut aller voir.
// "Action Man" si moins de 13 ans
// "Matrix" si il a entre 13 et 18 ans
// "Evil Dead" si plus de 18 ans
