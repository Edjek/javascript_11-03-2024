/* --------------------------- VARIABLES --------------------------- */

/*
    Une variable est un espace mémoire nommé qui permet de stocker une valeur
    Une variable est un conteneur pour stocker des données
    Une variable est un nom qui fait référence à une valeur
*/

/*
    Convention de nommage des variables en JavaScript
    1. Les noms de variables doivent être descriptifs
    2. Les noms de variables doivent être en anglais
    3. Les noms de variables doivent être en camelCase
    4. Les noms de variables ne doivent pas commencer par un chiffre
    5. Les noms de variables ne doivent pas contenir d'espaces
    6. Les noms de variables ne doivent pas contenir de caractères spéciaux (sauf _ et $)
*/

/*
    camelCase (JAVASCRIPT)
    kebab-case
    PascalCase
    snake_case
*/

// BETTER COMMENTS (extension VSCode)
// ? NB: Les noms de variables sont sensibles à la casse
// * Message important
// ! Attention à la sensibilité à la casse
// TODO: A faire

// Déclaration d'une variable (création d'une variable)
// Le language fait la différence entre les majuscules et les minuscules
// C'est ce qu'on appelle la sensibilité à la casse
let uneVariable;
let UNEVARIABLE;

// Affectation d'une valeur à une variable
uneVariable = 'Je suis une variable';
console.log(uneVariable);

// Déclaration et affectation en même temps
let greetingMessage = 'Hello, world';
console.log(greetingMessage);

// Réaffectation d'une valeur à une variable
greetingMessage = 'Je suis un nouveau message';
console.log(greetingMessage);

// `const` (constante) est un mot clé pour déclarer une constante
// Une constante est une variable qui ne peut pas être modifiée (réaffectée), on dit qu'elle est immuable
// `const` va garantir que la valeur ne soit pas modifié tout au long de l'execution du script
const constante = 'Je suis une constante';
// constante = 'autre chose'

// `var` (variable) est un mot clé pour déclarer une variable (avant 2015)
// C'est une pratique dépassée (c'était la seule façon avant 2015)
var past = 'je suis dépassé';
