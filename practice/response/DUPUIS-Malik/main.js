/*
    DUPUIS Malik
    Description: Algorithmique Practice
    Language: JavaScript
    Created: 2024-14-013
    By: @edjek
    Lisez les instructions ci-dessous et écrivez votre code dans le fichier main.js
    Vous pouvez tester votre code en ouvrant le fichier index.html dans votre navigateur
    Vous pouvez voir les résultats de votre code dans la console de votre navigateur
*/

/* -------- Malik Dupuis ----------- */

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
// Afficher le message de bienvenue dans la console

let message =
    'Bonjour, je suis une variable qui contient un message de bienvenue';
console.log(message);

// Creer une variable qui contient votre prenom
// Afficher la console le message suivant avec la variable qui contient votre prenom
// 'Bonjour, je m'appelle XXXX'
// Afficher le message avec les 3 facons de faire une concaténation

let prenom = 'Malik';

console.log("Bonjour, je m'appelle " + prenom);
console.log("Bonjour, je m'appelle " + prenom);
console.log(`Bonjour, je m'appelle ${prenom}`);

// ---------------------------------- Partie 2 ----------------------------------

// Creer une fonction qui affiche un message de bienvenue dans la console
// 'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
// Appeler la fonction

function afficher() {
    console.log(
        'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
    );
}

afficher();

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom
// 'Bonjour XXXX, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre'
// Appeler la fonction en lui passant votre prenom en parametre

function afficherParam(nom) {
    console.log(
        `Bonjour ${nom}, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre`
    );
}

afficherParam('Malik');

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom et un age
// 'Bonjour XXXX, vous avez XXXX ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres'
// Appeler la fonction en lui passant votre prenom et votre age en parametre

function displayAge(nom, age) {
    console.log(
        `Bonjour ${nom}, vous avez ${age} ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres'`
    );
}

displayAge('Malik', 24);

// ---------------------------------- Partie 3 ----------------------------------

// Déclarer une variable qui contient votre age
// Si vous avez plus de 18 ans afficher dans la console 'Vous êtes majeur'
// Sinon afficher dans la console 'Vous êtes mineur'

let age = 24;
if (age > 18) {
    console.log('Vous êtes majeur');
} else {
    console.log('Vous êtes mineur');
}

// Transformer la fonction pour retourner true si l'utilisateur est majeur et false sinon

function estMajeur() {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(estMajeur(18));

// Décider de l'animal préféré de l'utilisateur en fonction de son choix
//     Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
//     Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
//     Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
//     Sinon => je ne connais pas cet animal

let choix = prompt('Choisi un animal');

if (choix == 'chat' || choix == 'chien') {
    console.log('Vous aimez les animaux domestiques !');
} else if (choix == 'lion' || choix == 'tigre') {
    console.log('Vous aimez les animaux sauvages !');
} else if (choix == 'dauphin' || choix == 'otarie') {
    console.log('Vous aimez les animaux marins !');
} else {
    console.log('je ne connais pas cet animal');
}

// Transformer l'exercice en fonction qui prend en parametre un animal et qui retourne le message correspondant

function animalF(animal) {
    if (animal == 'chat' || animal == 'chien') {
        console.log('Vous aimez les animaux domestiques !');
    } else if (animal == 'lion' || animal == 'tigre') {
        console.log('Vous aimez les animaux sauvages !');
    } else if (animal == 'dauphin' || animal == 'otarie') {
        console.log('Vous aimez les animaux marins !');
    } else {
        console.log('je ne connais pas cet animal');
    }
}

animalF('dauphin');

// Utiliser la methode switch pour faire la meme chose

function animalSwitch(animal) {
    switch (animal) {
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
            break;
    }
}

animalSwitch('lion');

// ---------------------------------- Partie 4 ----------------------------------

// Faire une boucle qui affiche dans la console les nombres de 1 à 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console les nombres de 1 à ce nombre

let choixChiffre = prompt('donne chiffre');

for (let i = 1; i <= choixChiffre; i++) {
    console.log(i);
}

// Faire une fonction qui prend en parametre un nombre
// Et qui affiche dans la console la table de multiplication de ce nombre

function multi(nbr) {
    for (let i = 0; i < 10; i++) {
        console.log(`${i} x ${nbr} = ${i * nbr}`);
    }
}

multi(5);

// Algorithme de calcul de moyenne avec tableau
// Déclarer un tableau qui contient les notes de l'utilisateur [10, 15, 20]
// Calculer la moyenne de l'utilisateur
// Afficher dans la console la moyenne de l'utilisateur

let tab = [10, 15, 20];
let somme = 0;
for (const n of tab) {
    somme += n;
}
let moyenne = somme / tab.length;
console.log(moyenne);

// Déclarer une fonction qui prend en parametre une moyenne et qui retourne la mention de l'utilisateur
// Si la moyenne est supérieure ou égale à 10 => mention "Très bien"
// Si la moyenne est supérieure ou égale à 9 => mention "Bien"
// Si la moyenne est supérieure ou égale à 8 => mention "Assez bien"
// Si la moyenne est supérieure ou égale à 7 => mention "Passable"
// Si la moyenne est inférieure à 7 => mention "Insuffisant"

function mention(moyenne) {
    if (moyenne >= 10) {
        return 'Très bien';
    }
    if (moyenne >= 9) {
        return 'bien';
    }
    if (moyenne >= 8) {
        return 'Assez bien';
    }
    if (moyenne >= 7) {
        return 'Passable';
    }
    if (moyenne < 7) {
        return 'Insuffisant';
    }
}

console.log(mention(10));

// Déclarer une fonction qui prend en parametre un tableau de notes et un nom
// Calculer la moyenne de l'utilisateur
// Verifier si l'utilisateur est reçu ou non (recu au dessus de 10)
// Recuperer la mention de l'utilisateur
// Afficher dans la console le nom de l'utilisateur, sa moyenne, s'il est reçu ou non et sa mention

function calculMoyenneSimple(tab) {
    let sommes = 0;
    for (const n of tab) {
        sommes += n;
    }

    let moy = sommes / tab.length;

    return moy;
}

function recuF(moyenne) {
    if (moyenne > 10) {
        return true;
    } else {
        return false;
    }
}

function calculMoyenne(tableau, nom) {
    let sommes = 0;
    let EstRecu;
    for (const n of tableau) {
        sommes += n;
    }

    let moy = sommes / tableau.length;
    if (moy > 10) {
        EstRecu = 'il est recu';
    } else {
        EstRecu = 'il est pas recu haha';
    }
    let men = mention(moy);
    console.log(`${nom} a ${moy} de moyenne et ${EstRecu} avec ${men}`);
}

calculMoyenne([12, 12, 12], 'Malik');

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
    porte: 5,
    vitesse: 5,
    options: ['climatisation', 'vitres', 'gps', 'bluetooth', 'siege chauffant'],
    decrire: function () {
        console.log(
            `La voiture est une ${this.marque} clio rouge de 5 portes et 5 vitesses`
        );
    },
    decrireOptions: function () {
        console.log(
            `La voiture est équipée de la ${this.options[0]}, des vitres electriques, du gps, du bluetooth et des sieges chauffants`
        );
    },
};
// Afficher dans la console la marque de la voiture
// Afficher dans la console le modele de la voiture
// Afficher dans la console la couleur de la voiture

console.log(voiture.marque);
console.log(voiture.modele);
console.log(voiture.couleur);

// Afficher dans la console 'La voiture est une renault clio rouge de 5 portes et 5 vitesses'

voiture.decrire();

// A l'aide d'une boucle for(), afficher dans la console la liste des options de la voiture

for (let i = 0; i < voiture.options.length; i++) {
    console.log(voiture.options[i]);
}

// A l'aide d'une boucle forEach(), afficher dans la console la liste des options de la voiture

voiture.options.forEach((e) => {
    console.log(e);
});

// A l'aide d'une boucle for(...of...), afficher dans la console la liste des options de la voiture

for (const op of voiture.options) {
    console.log(op);
}

// Demander à l'utilisateur de saisir son prénom
// Demander à l'utilisateur de saisir son nom
// Demander à l'utilisateur de saisir son age
// Demander à l'utilisateur de saisir son sexe
// Demander à l'utilisateur de saisir son animal préféré

let p = prompt('prénom');
let n = prompt('nom');
let a = prompt('age');
let s = prompt('sexe');
let an = prompt('animal');

// Créer un objet utilisateur
//     prenom => prenom de l'utilisateur
//     nom => nom de l'utilisateur
//     age => age de l'utilisateur
//     sexe => sexe de l'utilisateur
//     animalPrefere => animal préféré de l'utilisateur
//     description => () => "Je m'appelle XXXX et j'ai XXXX ans et j'aime les XXXXX"

const utilisateur = {
    prenom: p,
    nom: n,
    age: a,
    sexe: s,
    animalPrefere: an,
    description: `Je m'appelle ${this.prenom} et j'ai ${this.a} ans et j'aime les ${this.an}`,
};

// Afficher dans la console la description de l'utilisateur

console.log(utilisateur.description);

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

for (const key in users) {
    console.log(users[key].description());
}
// Utiliser la méthode for()
for (let i = 0; i < users.length; i++) {
    console.log(users[i].description());
}
// Utiliser la méthode forEach()

users.forEach((e) => {
    console.log(e.description());
});

// Utiliser la méthode for(...of...)

for (const u of users) {
    console.log(u.description());
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

students.forEach((e) => {
    console.log(e.nom + ' ' + e.prenom);
});

// 2. Afficher dans la console le nom et le prénom de chaque élève qui sont inscrits au cours de "Français" ou "Maths"

console.log('---------- fr ou math -------------');

students.forEach((e) => {
    if (
        e.cours.includes('Français') == true ||
        e.cours.includes('Maths') == true
    ) {
        console.log(e.nom + ' ' + e.prenom);
    }
});

// 3. Afficher dans la console le nom et le prénom de chaque élève qui ont ete reçus (utiliser la fonction que vous avez créée dans la partie 5)

console.log('---------- recu -------------');
students.forEach((e) => {
    if (recuF(calculMoyenneSimple(e.notes))) {
        console.log(e.nom + ' ' + e.prenom);
    }
});

// 4. Afficher dans la console le nom et la moyenne de chaque élève

console.log('---------- nom et moyenne chaque élève -------------');

students.forEach((e) => {
    console.log(
        e.nom + ' ' + e.prenom + 'moyenne : ' + calculMoyenneSimple(e.notes)
    );
});

// 5. Afficher dans la console le nom et la moyenne de chaque élève
// si la moyenne est supérieure ou égale à 15
// Afficher dans la console 'vous obtenez une bourse'
// Si la moyenne estsupérieure ou égale à 10
// Afficher dans la console 'vous avez votre diplôme'
// Si en dessous de 10 et au dessus de 9
// Afficher dans la console 'vous allez en rattrapage'
// Si la moyenne est inférieure à 9
// Afficher dans la console 'vous redoublez'

console.log('------------- 5 -----------------');

students.forEach((e) => {
    console.log(
        e.nom + ' ' + e.prenom + 'moyenne : ' + calculMoyenneSimple(e.notes)
    );
    if (calculMoyenneSimple(e.notes) >= 15) {
        console.log('vous obtenez une bourse');
    } else if (calculMoyenneSimple(e.notes) >= 10) {
        console.log('vous avez votre diplôme');
    } else if (calculMoyenneSimple(e.notes) > 9) {
        console.log('vous allez en rattrapage');
    } else {
        console.log('vous redoublez');
    }
});
