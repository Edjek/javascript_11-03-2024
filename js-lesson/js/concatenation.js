/* --------------------------- CONCATENATION --------------------------- */

// CONCATENATION : afficher du texte et des variables

let firstName = 'Rachid';
let lastName = 'EDJEKOUANE';
let job = 'formateur Web';

console.log(
    'Bonjour ' + firstName + ' ' + lastName + ', je suis formateur' + job
);

console.log("bonjour, je m'appelle rachid et je suis " + job);
console.log("bonjour, je m'appelle rachid" + job);

// Template literals permet l'interpolation (interpretation de javascript au sein d'une chaine de caractère)
console.log(`bonjour, je m'appelle rachid ${lastName} et je suis ${job}`);

// declarer des variables
// age, prenom, nom de famille, adresse, formation, organisme
let age = 40
let nom = 'EDJEKOUANE'
let  prenom = 'rachid'
let adresse = '2 rue guy de maupassant 78500 SARTROUVILLE'
let formation = 'CDA'
let organisme = 'DORANCO'

let message = 'Je m\'appelle ' + prenom + ' ' + nom + ', j\'ai ' + age + ' ans et j\'habite '+ adresse + 'et je suis en formation ' + formation + ' à '+ organisme

message = "Je m'appelle " + prenom + " " + nom + ", j'ai " + age + " ans et j'habite "+ adresse + "et je suis en formation " + formation + " à "+ organisme

message = `Je m'appelle ${prenom} ${nom}, j'ai ${age} ans et j'habite ${adresse}, je suis en formation ${formation} à ${organisme}`

console.log(message);
