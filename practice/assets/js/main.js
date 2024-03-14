/*
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
// console.log('Bonjour, je suis un message affiché dans la console');

// Creer une variable qui contient un message de bienvenue
// 'Bonjour, je suis une variable qui contient un message de bienvenue'
// Afficher le message de bienvenue dans la console
const welcome =
    'Bonjour, je suis une variable qui contient un message de bienvenue';
console.log(welcome);

// Creer une variable qui contient votre prenom
// Afficher la console le message suivant avec la variable qui contient votre prenom
// 'Bonjour, je m'appelle XXXX'
const firstName = 'Rachid';

// Afficher le message avec les 3 facons de faire une concaténation
// console.log("Bonjour, je m'appelle " + firstName);
// console.log("Bonjour, je m'appelle " + firstName);
// console.log(`Bonjour, je m'appelle  ${firstName}`);

// ---------------------------------- Partie 2 ----------------------------------

// Creer une fonction qui affiche un message de bienvenue dans la console
// 'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
// Appeler la fonction

// ? 3 syntaxes possibles pour créer une fonction
function greetintConsole() {
    console.log(
        'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
    );
}

const greetintConsoleAnonyme = function () {
    console.log(
        'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
    );
};

const greetintConsoleArrow = () => {
    console.log(
        'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
    );
};
// greetintConsole();
// greetintConsoleAnonyme();
// greetintConsoleArrow;

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom
// 'Bonjour XXXX, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre'
// Appeler la fonction en lui passant votre prenom en parametre
const greetintConsoleWithParameter = (nomDeParametreQueJeChoisi) => {
    console.log(
        `Bonjour ${nomDeParametreQueJeChoisi}, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre`
    );
};
// greetintConsoleWithParameter('rachid');

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom et un age
// 'Bonjour XXXX, vous avez XXXX ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres'
// Appeler la fonction en lui passant votre prenom et votre age en parametre

const greetintConsoleWithTwoParameter = function (firstName, age) {
    console.log(
        `Bonjour ${firstName}, vous avez ${age} ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres`
    );
};
// greetintConsoleWithTwoParameter('rachid', 40);

// ---------------------------------- Partie 3 ----------------------------------

// Déclarer une variable qui contient votre age
// Si vous avez plus de 18 ans afficher dans la console 'Vous êtes majeur'
// Sinon afficher dans la console 'Vous êtes mineur'
const age = 40;

if (age >= 18) {
    console.log('Vous êtes majeur');
} else {
    console.log('Vous êtes mineur');
}

// Transformer la fonction pour retourner true si l'utilisateur est majeur et false sinon
function isMajor(age) {
    if (age >= 18) {
        return true;
    } else {
        return fa;
    }
}
let response = isMajor(40);
// console.log(response);

// Décider de l'animal préféré de l'utilisateur en fonction de son choix
//     Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
//     Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
//     Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
//     Sinon => je ne connais pas cet animal
const animal = 'chat';

if (animal === 'chien' || animal === 'chat') {
    console.log('Vous aimez les animaux domestiques !');
} else if (animal === 'lion' || animal === 'tigre') {
    console.log('Vous aimez les animaux sauvage !');
} else if (animal === 'dauphin' || animal === 'otarie') {
    console.log('Vous aimez les animaux marins !');
} else {
    console.log('Je ne connais pas cet animal');
}

// Transformer l'exercice en fonction qui prend en parametre un animal et qui retourne le message correspondant
const checkAnimal = (animal) => {
    if (animal === 'chien' || animal === 'chat') {
        return 'Vous aimez les animaux domestiques !';
    } else if (animal === 'lion' || animal === 'tigre') {
        return 'Vous aimez les animaux sauvage !';
    } else if (animal === 'dauphin' || animal === 'otarie') {
        return 'Vous aimez les animaux marins !';
    } else {
        return `Je ne connais pas l'animal ${animal}`;
    }
};
response = checkAnimal('dauphin');
// console.log(response);

// Utiliser la methode switch pour faire la meme chose
const checkAnimalWithSwitch = (animal) => {
    switch (animal) {
        case 'chien':
        case 'chat':
            return 'Vous aimez les animaux domestiques !';
        case 'dauphin':
        case 'otarie':
            return 'Vous aimez les animaux marins !';
        case 'lion':
        case 'tigre':
            return 'Vous aimez les animaux sauvages !';
        default:
            return `Je ne connais pas l'animal ${animal}`;
    }
};
response = checkAnimalWithSwitch('lion');
// console.log(response);

// ---------------------------------- Partie 4 ----------------------------------

// Faire une boucle qui affiche dans la console les nombres de 1 à 10
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console les nombres de 1 à ce nombre
let number = 65;
for (let i = 0; i < number; i++) {
    console.log(i);
}

// Faire une fonction qui prend en parametre un nombre
// Et qui affiche dans la console la table de multiplication de ce nombre
number = 8;
const multiplicationTable = function (number) {
    for (let i = 0; i < 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
};

// Algorithme de calcul de moyenne avec tableau
// Déclarer un tableau qui contient les notes de l'utilisateur [10, 15, 20]
// Calculer la moyenne de l'utilisateur
// Afficher dans la console la moyenne de l'utilisateur
const notes = [10, 15, 20];
let average = 0;

for (let i = 0; i < notes.length; i++) {
    average += notes[i];
}

average = average / notes.length;
console.log(average);

// Déclarer une fonction qui prend en parametre une moyenne et qui retourne la mention de l'utilisateur
// Si la moyenne est supérieure ou égale à 10 => mention "Très bien"
// Si la moyenne est supérieure ou égale à 9 => mention "Bien"
// Si la moyenne est supérieure ou égale à 8 => mention "Assez bien"
// Si la moyenne est supérieure ou égale à 7 => mention "Passable"
// Si la moyenne est inférieure à 7 => mention "Insuffisant"
const mention = function (average) {
    if (average >= 10) {
        return `mention: Très bien`;
    } else if (average >= 9) {
        return `mention: Bien`;
    } else if (average >= 8) {
        return `mention: Assez bien`;
    } else if (average >= 7) {
        return `mention: Passable`;
    } else {
        return `mention: insuffisant`;
    }
};
// Déclarer une fonction qui prend en parametre un tableau de notes et un nom
// Calculer la moyenne de l'utilisateur
// Verifier si l'utilisateur est reçu ou non (recu au dessus de 10)
// Recuperer la mention de l'utilisateur
// Afficher dans la console le nom de l'utilisateur, sa moyenne, s'il est reçu ou non et sa mention
const result = (array, firstName) => {
    let average = 0;
    for (let note of array) {
        average = average + note;
    }
    average = average / array.length;
    average = Math.ceil(average);
    console.log(average);
    let accept = 'non';
    if (average > 10) {
        accept = 'oui';
    }
    const congratulation = mention(average);
    console.log(`${firstName} a reçu la note de ${average} recu : ${accept}, mention : ${congratulation}`);
};

result([12, 6, 5], 'rachid');
// Algorithme pour savoir si l'utilisateur est reçu ou non
// Elle prend en parametre une moyenne
// Retourner true si la moyenne est supérieure ou égale à 10 et false sinon
function isPass(average) {
    if (average >= 10) {
        return true;
    } else {
        return false;
    }
}
// console.log(isPass(12));

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
const car = {
    marque: 'renault',
    modele: 'clio',
    couleur: 'rouge',
    optionsList: [
        'climatisation',
        'vitres electriques',
        'gps',
        'bluetooth',
        'siege chauffant',
    ],
    description: function () {
        return `La voiture est une ${this.marque} ${this.modele} ${this.couleur}`;
    },
    descriptionOptions: function () {
        return `La voiture est équipée de la ${this.optionsList[0]}, des vitres electriques, du gps, du bluetooth et des sieges chauffants`;
    },
};

// Afficher dans la console la marque de la voiture
console.log(car.marque);

// Afficher dans la console le modele de la voiture
console.log(car.modele);

// Afficher dans la console la couleur de la voiture
console.log(car.couleur);

// Afficher dans la console 'La voiture est une renault clio rouge de 5 portes et 5 vitesses'
console.log(car.description());

// A l'aide d'une boucle for(), afficher dans la console la liste des options de la voiture
for (let i = 0; i < car.optionsList.length; i++) {
    console.log(car.optionsList[i]);
}

// A l'aide d'une boucle forEach(), afficher dans la console la liste des options de la voiture
car.optionsList.forEach((option) => {
    console.log(option);
});

// A l'aide d'une boucle for(...of...), afficher dans la console la liste des options de la voiture
for (const option of car.optionsList) {
    console.log(option);
}

// Demander à l'utilisateur de saisir son prénom
// Demander à l'utilisateur de saisir son nom
// Demander à l'utilisateur de saisir son age
// Demander à l'utilisateur de saisir son sexe
// Demander à l'utilisateur de saisir son animal préféré
const name = 'rachid';
const lastName = 'EDJEKOUANE';
const aged = 40;
const sex = 'homme';
const lovedAnimal = 'chat';

// Créer un objet utilisateur
//     prenom => prenom de l'utilisateur
//     nom => nom de l'utilisateur
//     age => age de l'utilisateur
//     sexe => sexe de l'utilisateur
//     animalPrefere => animal préféré de l'utilisateur
//     description => () => "Je m'appelle XXXX et j'ai XXXX ans et j'aime les XXXXX"
let user = {
    prenom: name,
    nom: lastName,
    age: aged,
    sexe: sex,
    description: function () {
        return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans et j'aime les ${lovedAnimal}s`;
    },
};
// Afficher dans la console la description de l'utilisateur
console.log(user.description());

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
    // console.log(users[i].description());
}

// Utiliser la méthode forEach()
for (let user of users) {
    // console.log(user.description());
}

// Utiliser la méthode for(...of...)
users.forEach((user) => {
    // console.log(user.description());
});

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
        notes: [7, 11, 9],
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
        notes: [3, 11, 6],
    },
];

// Itérer sur le tableau students avec la méthode forEach()

// 1. Afficher dans la console le nom et le prénom de chaque élève
students.forEach(function (student) {
    // console.log(student.nom, student.prenom);
});

// 2. Afficher dans la console le nom et le prénom de chaque élève qui sont inscrits au cours de "Français" ou "Maths"
students.forEach(function (student) {
    student.cours.forEach(function (cour) {
        if (cour == 'Français' || cour == 'Maths') {
            // console.log(
            //     `Inscrits au cours de Maths ou français ` + student.nom,
            //     student.prenom
            // );
        }
    });
});

// 3. Afficher dans la console le nom et le prénom de chaque élève qui ont ete reçus (utiliser la fonction que vous avez créée dans la partie 5)
console.log(
    '--------------------- 4 - ELEVES RECU ---------------------------'
);

students.forEach(function (student) {
    let moyenne = 0;
    student.notes.forEach(function (note) {
        moyenne += note;
    });
    moyenne /= student.notes.length;
    const isPassed = isPass(moyenne);
    if (isPassed) {
        // console.log(`reçu : ${student.nom}, moyenne : ${moyenne}`);
    } else {
        // console.log(`refoulé : ${student.nom}, moyenne : ${moyenne}`);
    }
});

// 4. Afficher dans la console le nom et la moyenne de chaque élève
console.log('--------------------- 4 - MOYENNE ---------------------------');

students.forEach(function (student) {
    let moyenne = 0;
    student.notes.forEach(function (note) {
        moyenne += note;
    });
    moyenne /= student.notes.length;
    // console.log(
    //     `${student.nom} ${student.prenom} moyenne : ${Math.round(moyenne)}`
    // );
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
console.log('--------------------- 5 - PASSAGE ---------------------------');

students.forEach(function (student) {
    let moyenne = 0;
    student.notes.forEach(function (note) {
        moyenne += note;
    });
    moyenne /= student.notes.length;
    // if (moyenne >= 15) {
    //     console.log(
    //         `${student.nom} ${student.prenom}, vous obtenez une bourse`
    //     );
    // } else if (moyenne >= 10) {
    //     console.log(
    //         `${student.nom} ${student.prenom}, vous obtenez votre diplome`
    //     );
    // } else if (moyenne <= 10 && moyenne >= 9) {
    //     console.log(
    //         `${student.nom} ${student.prenom}, vous allez en rattrapage`
    //     );
    // } else {
    //     console.log(`${student.nom} ${student.prenom}, vous redoublez`);
    // }
});
