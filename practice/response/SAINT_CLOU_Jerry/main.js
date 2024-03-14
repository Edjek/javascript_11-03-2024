/*
    SAINT CLOU Jerry
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
console.log('Bonjour, je suis un message affiché dans la console');

// Creer une variable qui contient un message de bienvenue
// 'Bonjour, je suis une variable qui contient un message de bienvenue'
let message =
    'Bonjour, je suis une variable qui contient un message de bienvenue';
// Afficher le message de bienvenue dans la console
console.log(message);

// Creer une variable qui contient votre prenom
let prenom = 'Jerry';

// Afficher la console le message suivant avec la variable qui contient votre prenom
// 'Bonjour, je m'appelle XXXX'
console.log(`Bonjour, je m'appelle ${prenom}`);

// Afficher le message avec les 3 facons de faire une concaténation
console.log(`Bonjour, je m'appelle ${prenom}`);
console.log("Bonjour, je m'appelle " + prenom);
console.log("Bonjour, je m'appelle " + prenom);

// ---------------------------------- Partie 2 ----------------------------------

// Creer une fonction qui affiche un message de bienvenue dans la console
// 'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
function messageBienvenue() {
    console.log(
        'Bonjour, je suis une fonction qui affiche un massage de bienvenue dans la console'
    );
}
// Appeler la fonction
messageBienvenue();

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom
// 'Bonjour XXXX, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre'
function messageBienvenue2(nom) {
    console.log(
        `Bonjour ${nom}, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre`
    );
}

// Appeler la fonction en lui passant votre prenom en parametre
messageBienvenue2('jerry');

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom et un age
// 'Bonjour XXXX, vous avez XXXX ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres'
function messageBienvenue3(nom, age) {
    console.log(
        `Bonjour ${nom}, vous avez ${age} ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres`
    );
}
// Appeler la fonction en lui passant votre prenom et votre age en parametre
messageBienvenue3('jerry', 29);

// ---------------------------------- Partie 3 ----------------------------------

// Déclarer une variable qui contient votre age
const age = 29;
// Si vous avez plus de 18 ans afficher dans la console 'Vous êtes majeur'
// Sinon afficher dans la console 'Vous êtes mineur'
if (age === 18) {
    console.log('Vous êtes majeur');
} else {
    console.log('Vous êtes mineur');
}

// Transformer la fonction pour retourner true si l'utilisateur est majeur et false sinon
function majeurOuMineur(age) {
    if (age === 18) {
        return true;
    } else {
        return false;
    }
}

// Décider de l'animal préféré de l'utilisateur en fonction de son choix
//     Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
//     Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
//     Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
//     Sinon => je ne connais pas cet animal
let animalPrefere = prompt('Quelle est votre animal préférer?');
if (animalPrefere === 'chat' || animalPrefere === 'chien') {
    console.log('Vous aimez les animaux domestiques !');
} else if (animalPrefere === 'lion' || animalPrefere === 'tigre') {
    console.log('Vous aimez les animaux sauvages !');
} else if (animalPrefere === 'dauphin' || animalPrefere === 'otarie') {
    console.log('Vous aimez les animaux marins !');
} else {
    console.log('je ne connais pas cet animal');
}

// Transformer l'exercice en fonction qui prend en parametre un animal et qui retourne le message correspondant

function votreAnimalPref(animalPrefere) {
    let message;
    if (animalPrefere === 'chat' || animalPrefere === 'chien') {
        message = 'Vous aimez les animaux domestiques !';
    } else if (animalPrefere === 'lion' || animalPrefere === 'tigre') {
        message = 'Vous aimez les animaux sauvages !';
    } else if (animalPrefere === 'dauphin' || animalPrefere === 'otarie') {
        message = 'Vous aimez les animaux marins !';
    } else {
        message = 'je ne connais pas cet animal';
    }
    return message;
}

// Utiliser la methode switch pour faire la meme chose

switch (animalPrefere) {
    case 'chat':
        console.log('Vous aimez les animaux domestiques !');
        break;
    case 'chien':
        console.log('Vous aimez les animaux domestiques !');
        break;
    case 'lion':
        console.log('Vous aimez les animaux sauvages !');
        break;
    case 'tigre':
        console.log('Vous aimez les animaux sauvages !');
        break;
    case 'dauphin':
        console.log('Vous aimez les animaux marins !');
        break;
    case 'otarie':
        console.log('Vous aimez les animaux marins !');
        break;
    default:
        console.log('je ne connais pas cet animal');
}

function votreAnimalPref2(animalPref) {
    let message;
    switch (animalPrefere) {
        case 'chat':
            message = 'Vous aimez les animaux domestiques !';
            break;
        case 'chien':
            message = 'Vous aimez les animaux domestiques !';
            break;
        case 'lion':
            message = 'Vous aimez les animaux sauvages !';
            break;
        case 'tigre':
            message = 'Vous aimez les animaux sauvages !';
            break;
        case 'dauphin':
            message = 'Vous aimez les animaux marins !';
            break;
        case 'otarie':
            message = 'Vous aimez les animaux marins !';
            break;
        default:
            message = 'je ne connais pas cet animal';
    }
    return message;
}

// ---------------------------------- Partie 4 ----------------------------------

// Faire une boucle qui affiche dans la console les nombres de 1 à 10
for (let i = 1; i < 11; i++) {
    console.log(i);
}

// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console les nombres de 1 à ce nombre

const nombre = Number(prompt('Donner un nombre'));
for (let i = 1; i <= nombre; i++) {
    console.log(i);
}

// Faire une fonction qui prend en parametre un nombre
// Et qui affiche dans la console la table de multiplication de ce nombre
function multiplication(nombre) {
    for (let i = 0; i < 11; i++) {
        console.log(`${i} x ${nombre} = ${i * nombre}`);
    }
}

// Algorithme de calcul de moyenne avec tableau
// Déclarer un tableau qui contient les notes de l'utilisateur [10, 15, 20]
let notesUtilisateur = [10, 15, 20];
// Calculer la moyenne de l'utilisateur
let moyenne = 0;
for (let i = 0; i < notesUtilisateur.length; i++) {
    moyenne = moyenne + notesUtilisateur[i];
}
moyenne = moyenne / notesUtilisateur.length;
// Afficher dans la console la moyenne de l'utilisateur
console.log(moyenne);

// Déclarer une fonction qui prend en parametre une moyenne et qui retourne la mention de l'utilisateur
// Si la moyenne est supérieure ou égale à 10 => mention "Très bien"
// Si la moyenne est supérieure ou égale à 9 => mention "Bien"
// Si la moyenne est supérieure ou égale à 8 => mention "Assez bien"
// Si la moyenne est supérieure ou égale à 7 => mention "Passable"
// Si la moyenne est inférieure à 7 => mention "Insuffisant"

function mentions(moyenne) {
    let mention;
    if (moyenne >= 10) {
        mention = 'Très bien';
    } else if (moyenne >= 9) {
        mention = 'Bien';
    } else if (moyenne >= 8) {
        mention = 'Assez bien';
    } else if (moyenne >= 7) {
        mention = 'Passable';
    } else {
        mention = 'Insuffisant';
    }
    return mention;
}

// Déclarer une fonction qui prend en parametre un tableau de notes et un nom
function moyenneUtilisateur(notes, nom) {
    let moyenne = 0;
    let mention;
    // Calculer la moyenne de l'utilisateur
    for (let i = 0; i < notes.length; i++) {
        moyenne = moyenne + notes[i];
    }
    moyenne = moyenne / notes.length;

    // Verifier si l'utilisateur est reçu ou non (recu au dessus de 10)
    if (moyenne > 10) {
        // Recuperer la mention de l'utilisateur
        mention = 'Vous êtes reçu';
    } else {
        // Recuperer la mention de l'utilisateur
        mention = "Vous n'est pas reçu";
    }

    // Afficher dans la console le nom de l'utilisateur, sa moyenne, s'il est reçu ou non et sa mention
    // console.log(`${nom} votre moyenne est de ${moyenne} et ${mention}`);

    return mention;
}

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
    nombreDePorte: 5,
    nombreDeVitesse: 5,
    listeDesOptions: [
        'climatisation',
        'vitres electriques',
        'gps',
        'bluetooth',
        'siege chauffant',
    ],
    decrire: function () {
        return `La voiture est une ${this.marque} ${this.modele} ${this.couleur} de ${this.nombreDePorte} portes et ${this.nombreDeVitesse} vitesses`;
    },
    decrireOptions: function () {
        return `La voiture est équipée de la ${this.listeDesOptions[0]}, des ${this.listeDesOptions[1]}, du ${this.listeDesOptions[2]}, du ${this.listeDesOptions[3]} et des ${this.listeDesOptions[4]}`;
    },
};

// Afficher dans la console la marque de la voiture
console.log(voiture.marque);

// Afficher dans la console le modele de la voiture
console.log(voiture.modele);

// Afficher dans la console la couleur de la voiture
console.log(voiture.couleur);

// Afficher dans la console 'La voiture est une renault clio rouge de 5 portes et 5 vitesses'
console.log(
    `La voiture est une ${voiture.marque} ${voiture.modele} ${voiture.couleur} de ${voiture.nombreDePorte} portes et ${voiture.nombreDeVitesse} vitesses`
);
// ou
console.log(voiture.decrire());

// A l'aide d'une boucle for(), afficher dans la console la liste des options de la voiture
for (let i = 0; i < voiture.listeDesOptions.length; i++) {
    console.log(voiture.listeDesOptions[i]);
}

// A l'aide d'une boucle forEach(), afficher dans la console la liste des options de la voiture
voiture.listeDesOptions.forEach(function (option) {
    console.log(option);
});

// A l'aide d'une boucle for(...of...), afficher dans la console la liste des options de la voiture
for (let option of voiture.listeDesOptions) {
    console.log(option);
}

// Demander à l'utilisateur de saisir son prénom
let prenomUtilisateur = prompt('veuillez saisir votre prénom');

// Demander à l'utilisateur de saisir son nom
let nomUtilisateur = prompt('Veuillez saisir votre nom');

// Demander à l'utilisateur de saisir son age
let ageUtilisateur = prompt('Veuillez saisir votre age');

// Demander à l'utilisateur de saisir son sexe
let sexeUtilisateur = prompt('Veuillez saisir votre sexe');

// Demander à l'utilisateur de saisir son animal préféré
let animalPrefUtilisateur = prompt('Veuillez saisir votre animal préférer');

// Créer un objet utilisateur
//     prenom => prenom de l'utilisateur
//     nom => nom de l'utilisateur
//     age => age de l'utilisateur
//     sexe => sexe de l'utilisateur
//     animalPrefere => animal préféré de l'utilisateur
//     description => () => "Je m'appelle XXXX et j'ai XXXX ans et j'aime les XXXXX"
const utilisateur = {
    prenom: prenomUtilisateur,
    nom: nomUtilisateur,
    age: ageUtilisateur,
    sexe: sexeUtilisateur,
    animalPrefere: animalPrefUtilisateur,
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
users.forEach(function (utilisateur) {
    console.log(utilisateur.description());
});
// Utiliser la méthode for(...of...)

for (let utilisateur of users) {
    console.log(utilisateur.description());
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
console.log('');
// Itérer sur le tableau students avec la méthode forEach()
// 1. Afficher dans la console le nom et le prénom de chaque élève
students.forEach(function (etudiant) {
    console.log(`${etudiant.prenom} ${etudiant.nom}`);
});

// 2. Afficher dans la console le nom et le prénom de chaque élève qui sont inscrits au cours de "Français" ou "Maths"
students.forEach(function (etudiant) {
    for (let i = 0; i < etudiant.cours.length; i++) {
        if (etudiant.cours[i] === 'Français' || etudiant.cours[i] === 'Maths') {
            console.log(`${etudiant.prenom} ${etudiant.nom}`);
        }
    }
});

// 3. Afficher dans la console le nom et le prénom de chaque élève qui ont ete reçus (utiliser la fonction que vous avez créée dans la partie 5)
students.forEach(function (etudiant) {
    if (
        moyenneUtilisateur(etudiant.notes, etudiant.prenom) === 'Vous êtes reçu'
    ) {
        console.log(`${etudiant.prenom} ${etudiant.nom}`);
    }
});

//
// 4. Afficher dans la console le nom et la moyenne de chaque élève
for (let i = 0; i < students.length; i++) {
    let moyenneEtudiant = 0;
    for (let j = 0; j < students[i].cours.length; j++) {
        moyenneEtudiant = moyenneEtudiant + students[i].notes[j];
    }
    moyenneEtudiant = moyenneEtudiant / students[i].cours.length;
    // 5. Afficher dans la console le nom et la moyenne de chaque élève
    console.log(
        ` ${students[i].nom} sa moyenne est de ${Math.round(moyenneEtudiant)}`
    );

    // si la moyenne est supérieure ou égale à 15
    if (moyenneEtudiant >= 15) {
        // Afficher dans la console 'vous obtenez une bourse'
        console.log('Vous obtenez une bourse');
    } else if (moyenneEtudiant >= 10) {
        // Si la moyenne estsupérieure ou égale à 10
        // Afficher dans la console 'vous avez votre diplôme'
        console.log('vous avez votre diplôme');
    } else if (moyenneEtudiant < 10 && moyenneEtudiant > 9) {
        // Si en dessous de 10 et au dessus de 9
        // Afficher dans la console 'vous allez en rattrapage'
        console.log('Vous allez en rattrapage');
    } // Si la moyenne est inférieure à 9
    else {
        // Afficher dans la console 'vous redoublez'
        console.log('Vous redoublez');
    }
}
