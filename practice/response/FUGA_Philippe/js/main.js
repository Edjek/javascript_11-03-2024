/*
    FUGA Filipp
    Description: Algorithmique Practice
    Language: JavaScript
    Created: 2024-14-013
    By: @edjek
    Lisez les instructions ci-dessous et écrivez votre code dans le fichier main.js
    Vous pouvez tester votre code en ouvrant le fichier index.html dans votre navigateur
    Vous pouvez voir les résultats de votre code dans la console de votre navigateur
*/

/*
        ._________________.
        | _______________ |
        | I             I |
        | I javascript  I |
        | I    Algo     I |
        | I             I |
        | I_____________I |
        |_________________|
            ._[_______]_.
        .___|___________|___.
        |::: ____           |
        |    ~~~~ [CD-ROM]  |
        |___________________|

 */

// ---------------------------------- Partie 1 ----------------------------------

// Afficher un message de bienvenue dans la console
// 'Bonjour, je suis un message affiché dans la console'
console.log(`Bonjour, je suis un message affiché dans la console`);

// Creer une variable qui contient un message de bienvenue
// 'Bonjour, je suis une variable qui contient un message de bienvenue'
// Afficher le message de bienvenue dans la console
const message =
    'Bonjour, je suis une variable qui contient un message de bienvenue';
console.log(message);

// Creer une variable qui contient votre prenom
// Afficher la console le message suivant avec la variable qui contient votre prenom
// 'Bonjour, je m'appelle XXXX'
const name = 'Filipp';
console.log(`Bonjour, je m'appelle ${name}`);
console.log("Bonjour, je m'appelle " + name);
console.log("Bonjour, je m'appelle " + name);

// Afficher le message avec les 3 facons de faire une concaténation

// ---------------------------------- Partie 2 ----------------------------------

// Creer une fonction qui affiche un message de bienvenue dans la console
// 'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
// Appeler la fonction
function messageFunction() {
    console.log(
        'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
    );
}
messageFunction();

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom
// 'Bonjour XXXX, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre'
// Appeler la fonction en lui passant votre prenom en parametre
function messageNamed(name) {
    console.log(
        'Bonjour ' +
            name +
            ' , je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre'
    );
}
messageNamed('Filipp');

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom et un age
// 'Bonjour XXXX, vous avez XXXX ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres'
// Appeler la fonction en lui passant votre prenom et votre age en parametre
function messageNamedWithAged(name, age) {
    console.log(
        `Bonjour ${name}, vous avez ${age} ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres`
    );
}
messageNamedWithAged('Filipp', 21);

// ---------------------------------- Partie 3 ----------------------------------

// Déclarer une variable qui contient votre age
// Si vous avez plus de 18 ans afficher dans la console 'Vous êtes majeur'
// Sinon afficher dans la console 'Vous êtes mineur'
const ageV2 = 21;
let res =
    ageV2 > 18
        ? console.log('Vous êtes majeur')
        : console.log('Vous êtes mineur');

// Transformer la fonction pour retourner true si l'utilisateur est majeur et false sinon
res = ageV2 > 18 ? true : false;

// Décider de l'animal préféré de l'utilisateur en fonction de son choix
//     Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
//     Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
//     Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
//     Sinon => je ne connais pas cet animal
let animal = prompt('Quel est votre animal préféré ?');

let animalPréféré =
    animal === 'chat' || animal === 'chien'
        ? 'vous aimez les animaux domestiques !'
        : animal === 'lion' || animal === 'tigre'
        ? 'vous aimez les animaux sauvages !'
        : animal === 'dauphin' || animal === 'otarie'
        ? 'vous aimez les animaux marins !'
        : 'Je ne connais pas cet animal !';

console.log(animalPréféré);

// Transformer l'exercice en fonction qui prend en parametre un animal et qui retourne le message correspondant
function animalChoice(animal) {
    return animal === 'chat' || animal === 'chien'
        ? 'vous aimez les animaux domestiques !'
        : animal === 'lion' || animal === 'tigre'
        ? 'vous aimez les animaux sauvages !'
        : animal === 'dauphin' || animal === 'otarie'
        ? 'vous aimez les animaux marins !'
        : 'Je ne connais pas cet animal !';
}

console.log(animalChoice(prompt('Quel est votre animal préféré ?')));

// Utiliser la methode switch pour faire la meme chose

animal = prompt('Quel est ton animal préféré ?');

switch (animal) {
    case 'chien':
    case 'chat':
        console.log('vous aimez les animaux domestiques !');
        break;
    case 'lion':
    case 'tigre':
        console.log('vous aimez les animaux sauvages !');
        break;
    case 'dauphin':
    case 'otarie':
        console.log('vous aimez les animaux marins !');
        break;
    default:
        console.log('je ne connais pas cet animal');
}

// ---------------------------------- Partie 4 ----------------------------------

// Faire une boucle qui affiche dans la console les nombres de 1 à 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console les nombres de 1 à ce nombre
const nbr = prompt('Entrez un nombre');

for (let i = 1; i <= nbr; i++) {
    console.log(i);
}

// Faire une fonction qui prend en parametre un nombre
// Et qui affiche dans la console la table de multiplication de ce nombre
let j = 1;
function tablesOfMult(number) {
    while (j <= 10) {
        console.log(`${j} x ${number} = ${j * number}`);
        j++;
    }
}

tablesOfMult(12);

// Algorithme de calcul de moyenne avec tableau
// Déclarer un tableau qui contient les notes de l'utilisateur [10, 15, 20]
// Calculer la moyenne de l'utilisateur
// Afficher dans la console la moyenne de l'utilisateur
const notes = [10, 15, 22, 11, 20];
function checkMoy(array) {
    let moyenne = 0;
    for (let i = 0; i < array.length; i++) {
        moyenne += array[i];
    }
    moyenne /= array.length;
    return moyenne;
}

console.log(checkMoy(notes));

// Déclarer une fonction qui prend en parametre une moyenne et qui retourne la mention de l'utilisateur
// Si la moyenne est supérieure ou égale à 10 => mention "Très bien"
// Si la moyenne est supérieure ou égale à 9 => mention "Bien"
// Si la moyenne est supérieure ou égale à 8 => mention "Assez bien"
// Si la moyenne est supérieure ou égale à 7 => mention "Passable"
// Si la moyenne est inférieure à 7 => mention "Insuffisant"
function mention(moyenne) {
    return moyenne >= 10
        ? "mention 'très bien'"
        : moyenne >= 9
        ? "mention 'bien'"
        : moyenne >= 8
        ? "mention 'assez bien'"
        : moyenne >= 7
        ? "mention 'passable'"
        : "mention 'insuffisant'";
}

console.log(mention(11));

// Déclarer une fonction qui prend en parametre un tableau de notes et un nom
// Calculer la moyenne de l'utilisateur
// Verifier si l'utilisateur est reçu ou non (recu au dessus de 10)
// Recuperer la mention de l'utilisateur
// Afficher dans la console le nom de l'utilisateur, sa moyenne, s'il est reçu ou non et sa mention
function resultatsEleve(array, nom) {
    let moyenne = checkMoy(array);
    let reçu = moyenne > 10 ? 'reçu' : 'non reçu';
    let mentionn = mention(moyenne);
    console.log(
        `Nom: ${nom} , Moyenne: ${moyenne}, Mention: ${mentionn} , resultat: ${reçu}`
    );
}

resultatsEleve(notes, 'Rachid');

// ---------------------------------- Partie 6 ----------------------------------

// Creer un objet voiture
//     marque => renault
//     modele => clio
//     couleur => rouge
//     nombre de portes => 5
//     nombre de vitesses => 5
//     liste des options => (array) => climatisation, vitres electriques, gps, bluetooth, siege chauffant
//     decrire => () => "La voiture est une renault clio rouge de 5 portes et 5 vitesses"
//     decrireOptions => () => "La voiture est équipée de la climatisation, des vitres electriques, du gps, du bluetooth et des sieges chauffants"

const voiture = {
    marque: 'renault',
    modele: 'clio',
    couleur: 'rouge',
    nbrPortes: 5,
    nbrVitesses: 5,
    options: [
        'climatisation',
        'vitres éléctriques',
        'gps',
        'bluetooth',
        'siege chauffant',
    ],
    décrire: function () {
        return `La voiture est une ${this.marque} ${this.modele} ${this.couleur} de ${this.nbrPortes} portes et ${this.nbrVitesses} vitesses !`;
    },
    décrireOptions: function () {
        return `La voiture est équipée de la ${this.options[0]}, des ${this.options[1]}, du ${this.options[2]}, du ${this.options[3]},et des  ${this.options[4]}`;
    },
};

// Afficher dans la console la marque de la voiture
// Afficher dans la console le modele de la voiture
// Afficher dans la console la couleur de la voiture

console.log(voiture.marque, voiture.modele, voiture.couleur);

// Afficher dans la console 'La voiture est une renault clio rouge de 5 portes et 5 vitesses'

console.log(voiture.décrire());

// A l'aide d'une boucle for(), afficher dans la console la liste des options de la voiture

for (let i = 0; i < voiture.options.length; i++) {
    console.log(voiture.options[i]);
}

// A l'aide d'une boucle forEach(), afficher dans la console la liste des options de la voiture

voiture.options.forEach((option) => {
    console.log(option);
});

// A l'aide d'une boucle for(...of...), afficher dans la console la liste des options de la voiture

for (const option of voiture.options) {
    console.log(option);
}

// Demander à l'utilisateur de saisir son prénom
const prenom = prompt('Entrez votre prénom :');
// Demander à l'utilisateur de saisir son nom
const nom = prompt('Entrez votre nom :');
// Demander à l'utilisateur de saisir son age
const age = prompt('Entrez votre âge :');
// Demander à l'utilisateur de saisir son sexe
const sexe = prompt('Entrez votre sexe :');
// Demander à l'utilisateur de saisir son animal préféré
const animalPrefere = prompt('Entrez votre animal préféré :');

// Créer un objet utilisateur
//     prenom => prenom de l'utilisateur
//     nom => nom de l'utilisateur
//     age => age de l'utilisateur
//     sexe => sexe de l'utilisateur
//     animalPrefere => animal préféré de l'utilisateur
//     description => () => "Je m'appelle XXXX et j'ai XXXX ans et j'aime les XXXXX"

const utilisateur = {
    prenom: prenom,
    nom: nom,
    age: age,
    sexe: sexe,
    animalPrefere: animalPrefere,
    description: function () {
        return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans et j'aime les ${this.animalPrefere}`;
    },
};

// Afficher dans la console la description de l'utilisateur
console.log(utilisateur.description());

// Voici un tableau qui contient 6 objets utilisateurs
let users = [
    {
        prenom: 'Alice',
        nom: 'Dupont',
        age: 28,
        sexe: 'Femme',
        animauxPreferes: ['chat', 'chien'],
        description: function () {
            return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${
                this.age
            } ans et j'aime les ${this.animauxPreferes.join(', ')}.`;
        },
    },
    {
        prenom: 'Bob',
        nom: 'Martin',
        age: 35,
        sexe: 'Homme',
        animauxPreferes: ['poisson', 'oiseau'],
        description: function () {
            return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${
                this.age
            } ans et j'aime les ${this.animauxPreferes.join(', ')}.`;
        },
    },
    {
        prenom: 'Claire',
        nom: 'Rousseau',
        age: 42,
        sexe: 'Femme',
        animauxPreferes: ['cheval', 'lapin'],
        description: function () {
            return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${
                this.age
            } ans et j'aime les ${this.animauxPreferes.join(', ')}.`;
        },
    },
    {
        prenom: 'David',
        nom: 'Lefebvre',
        age: 22,
        sexe: 'Homme',
        animauxPreferes: ['chat', 'chien'],
        description: function () {
            return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${
                this.age
            } ans et j'aime les ${this.animauxPreferes.join(', ')}.`;
        },
    },
    {
        prenom: 'Emma',
        nom: 'Garcia',
        age: 29,
        sexe: 'Femme',
        animauxPreferes: ['chien', 'hamster'],
        description: function () {
            return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${
                this.age
            } ans et j'aime les ${this.animauxPreferes.join(', ')}.`;
        },
    },
    {
        prenom: 'François',
        nom: 'Moreau',
        age: 46,
        sexe: 'Homme',
        animauxPreferes: ['chat', 'oiseau'],
        description: function () {
            return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${
                this.age
            } ans et j'aime les ${this.animauxPreferes.join(', ')}.`;
        },
    },
];

// Faire une boucle sur le tableau users
// Afficher dans la console la description de chaque utilisateur
// Utiliser la méthode for()
for (let i = 0; i < users.length; i++) {
    console.log(users[i].description());
}

// Utiliser la méthode forEach()
users.forEach((element) => {
    console.log(element.description());
});

// Utiliser la méthode for(...of...)
for (const user of users) {
    console.log(user.description());
}

// ---------------------------------- Partie 7 ----------------------------------

const students = [
    {
        nom: 'Dupont',
        prenom: 'Alice',
        cours: ['Maths', 'Anglais', 'Histoire'],
        notes: [14, 16, 18],
    },
    {
        nom: 'Martin',
        prenom: 'Bob',
        cours: ['Physique', 'Espagnol', 'Géographie'],
        notes: [12, 13, 15],
    },
    {
        nom: 'Lefebvre',
        prenom: 'Claire',
        cours: ['Chimie', 'Allemand', 'SVT'],
        notes: [9, 10, 11],
    },
    {
        nom: 'Girard',
        prenom: 'David',
        cours: ['Français', 'Arts plastiques', 'Philosophie'],
        notes: [17, 19, 14],
    },
    {
        nom: 'Petit',
        prenom: 'Emma',
        cours: ['Latin', 'Musique', 'Sciences économiques'],
        notes: [16, 11, 12],
    },
    {
        nom: 'Moreau',
        prenom: 'François',
        cours: ['Sport', 'Théâtre', 'Informatique'],
        notes: [11, 13, 15],
    },
    {
        nom: 'Dubois',
        prenom: 'Marc',
        cours: ['Géométrie', 'Latin', 'Marketing'],
        notes: [15, 12, 10],
    },
    {
        nom: 'Garcia',
        prenom: 'Hugo',
        cours: ['Littérature', 'Musique', 'Droit'],
        notes: [14, 17, 18],
    },
    {
        nom: 'Roux',
        prenom: 'Inès',
        cours: ['Sociologie', 'Japonais', 'Chimie'],
        notes: [10, 9, 12],
    },
    {
        nom: 'Berger',
        prenom: 'Jules',
        cours: ['Géographie', 'Théâtre', 'Espagnol'],
        notes: [13, 16, 14],
    },
    {
        nom: 'Moulin',
        prenom: 'Karine',
        cours: ["Histoire de l'art", 'Anglais', 'Physique'],
        notes: [17, 15, 18],
    },
    {
        nom: 'David',
        prenom: 'Lucie',
        cours: ['Chinois', 'Marketing', 'SVT'],
        notes: [12, 11, 9],
    },
    {
        nom: 'Mercier',
        prenom: 'Marc',
        cours: ['Philosophie', 'Sport', 'Français'],
        notes: [18, 13, 16],
    },
    {
        nom: 'Fournier',
        prenom: 'Nina',
        cours: ['Informatique', 'Littérature', 'Musique'],
        notes: [15, 14, 17],
    },
    {
        nom: 'Morel',
        prenom: 'Olivier',
        cours: ['Espagnol', 'Chimie', 'Théâtre'],
        notes: [13, 11, 16],
    },
];

// Itérer sur le tableau students avec la méthode forEach()

// 1. Afficher dans la console le nom et le prénom de chaque élève
students.forEach((student) => {
    console.log(student.nom, student.prenom);
});

// 2. Afficher dans la console le nom et le prénom de chaque élève qui sont inscrits au cours de "Français" ou "Maths"

students.forEach((student) => {
    if (student.cours.includes('Français') || student.cours.includes('Maths')) {
        console.log(student.nom, student.prenom);
    }
});

// 3. Afficher dans la console le nom et le prénom de chaque élève qui ont été reçus
function estReçu(notes) {
    const moyenne = checkMoy(notes);
    return moyenne >= 10;
}
students.forEach((student) => {
    if (estReçu(student.notes)) {
        console.log(student.nom, student.prenom);
    }
});

// 4. Afficher dans la console le nom et la moyenne de chaque élève
students.forEach((student) => {
    const moyenne = checkMoy(student.notes);
    console.log(`${student.nom} ${student.prenom} moyenne: ${moyenne}`);
});

// 5. Afficher dans la console le nom et la moyenne de chaque élève selon des critères spécifiques
students.forEach((student) => {
    const moyenne = checkMoy(student.notes);
    let message = `${student.nom} ${student.prenom} - Moyenne: ${moyenne}`;

    if (moyenne >= 15) {
        message += ' - Vous obtenez une bourse';
    } else if (moyenne >= 10) {
        message += ' - Vous avez votre diplôme';
    } else if (moyenne < 9) {
        message += ' - Vous allez en rattrapage';
    } else {
        message += ' - Vous redoublez';
    }

    console.log(message);
});
