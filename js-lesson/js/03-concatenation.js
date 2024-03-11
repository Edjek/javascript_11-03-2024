/* --------------------------- CONCATENATION --------------------------- */

// Concaténation de chaine de caractère (assemblage de chaine de caractère)

const firstName = 'Rachid';
const lastName = 'EDJEKOUANE';
const job = 'formateur Web';

console.log(
    'Bonjour ' + firstName + ' ' + lastName + ', je suis formateur' + job
);

console.log("bonjour, je m'appelle rachid et je suis " + job);
console.log("bonjour, je m'appelle rachid" + job);

// Les template literals sont des chaines de caractères délimitées par des backticks (accent grave)
// Les template literals permettent d'insérer des expressions Javascript dans une chaine de caractères en utilisant ${}
console.log(`bonjour, je m'appelle rachid ${lastName} et je suis ${job}`);

const age = 40;
const nom = 'EDJEKOUANE';
const prenom = 'rachid';
const adresse = '2 rue guy de maupassant 78500 SARTROUVILLE';
const formation = 'CDA';
const organisme = 'DORANCO';

let message =
    "Je m'appelle " +
    prenom +
    ' ' +
    nom +
    ", j'ai " +
    age +
    " ans et j'habite " +
    adresse +
    'et je suis en formation ' +
    formation +
    ' à ' +
    organisme;

message =
    "Je m'appelle " +
    prenom +
    ' ' +
    nom +
    ', j"ai ' +
    age +
    ' ans et j"habite ' +
    adresse +
    'et je suis en formation ' +
    formation +
    ' à ' +
    organisme;

message = `Je m'appelle ${prenom} ${nom}, j'ai ${age} ans et j'habite ${adresse}, je suis en formation ${formation} à ${organisme}`;

console.log(message);
