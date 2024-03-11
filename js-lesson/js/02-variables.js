/* --------------------------- VARIABLES --------------------------- */

// CONVENTIONS de nommages
// camelCase (JAVASCRIPT)
// kebab-case
// PascalCase
// snake_case

// L'extension BETTER COMMENT permet d'avoir des commentaires en couleur
// ? NB: Les noms de variables sont sensibles à la casse
// * Message
// ! Attention
// TODO

// Le language fait la différence entre les majuscules et les minuscules

// DECLARATION de variable
let uneVariable;
let UNEVARIABLE;

// AFFECTATION d'une variable (donne une valeur à la variable)
uneVariable = 'Je suis une variable';
console.log(uneVariable);

// Les deux peuvent se faire en même temps
let greetingMessage = 'Hello, world';
console.log(greetingMessage);
greetingMessage = 'Je suis un nouveau message';
console.log(greetingMessage);

// Le mot clé const permet de déclarer une constante
// Vous ne pouvez pas modifier une constante (on dit qu'elle est immuable)
// `const` va garantir que la valeur ne soit pas modifié tout au long de l'execution du script
const constante = 'Je suis une constante';
// constante = 'autre chose'

// Le mot clé var permettait aussi de déclarer des variables
// C'est une pratique dépassée (c'était la seule façon avant 2015)
var past = 'je suis dépassé';
