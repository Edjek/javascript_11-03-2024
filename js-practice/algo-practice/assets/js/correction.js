/*
    Description: Algorithmique Practice
    Language: JavaScript
    Created: 2024-03-14
    By: @edjek
    Lisez les instructions ci-dessous et écrivez votre code dans le fichier main.js
    Vous pouvez tester votre code en ouvrant le fichier index.html dans votre navigateur
    Vous pouvez voir les résultats de votre code dans la console de votre navigateur
*/

/*
        ._________________.
        | _______________ |
        | I             I |
        | I Javascript  I |
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
const message =
    'Bonjour, je suis une variable qui contient un message de bienvenue';
console.log(message);

// Creer une variable qui contient un message
// 'Je decouvre le javascript'
// Concatener les deux variables et afficher le resultat dans la console
const discover = 'Je decouvre le javascript';
console.log(`${message}, ${discover}`);

// Creer une variable qui contient votre prenom
// Afficher la console le message suivant avec la variable qui contient votre prenom
// 'Bonjour, je m'appelle XXXX'
const userName = 'Rachid';

// Afficher le message avec les 3 facons de faire une concaténation
console.log("Bonjour, je m'appelle " + userName);
console.log("Bonjour, je m'appelle " + userName);
console.log(`Bonjour, je m'appelle ${userName}`);

// ---------------------------------- Partie 2 ----------------------------------

// Creer une fonction qui affiche un message de bienvenue dans la console
// 'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
// Appeler la fonction
function showMessage() {
    console.log(
        'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
    );
}
showMessage();

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom
// 'Bonjour XXXX, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre'
// Appeler la fonction en lui passant votre prenom en parametre
const showMessageWithParameter = function (name) {
    console.log(
        `Bonjour ${name}, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre`
    );
};
showMessageWithParameter('rachid');

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom et un age
// 'Bonjour XXXX, vous avez XXXX ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres'
// Appeler la fonction en lui passant votre prenom et votre age en parametre
const showMessageWithTwoParameter = (name, age) => {
    console.log(
        `Bonjour ${name}, vous avez ${age} ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres, à plus tard ${name}`
    );
};
showMessageWithTwoParameter('Rachid', '38');

// ---------------------------------- Partie 3 ----------------------------------

// Déclarer une variable qui contient votre age
// Si vous avez plus de 18 ans afficher dans la console 'Vous êtes majeur'
// Sinon afficher dans la console 'Vous êtes mineur'
const age = 39;

if (age >= 18) {
    console.log('Vous êtes majeur');
} else {
    console.log('Vous êtes mineur');
}

// Déclarer une fonction qui prend en parametre un age
// Et qui affiche dans la console si l'utilisateur est majeur ou mineur
function checkAge(age) {
    if (age >= 18) {
        console.log('Vous êtes majeur');
    } else {
        console.log('Vous êtes mineur');
    }
}
checkAge(12);

// Déclarer une fonction qui prend en parametre un animal
// Décider de l'animal préféré de l'utilisateur en fonction de son choix
//     Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
//     Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
//     Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
//     Sinon => je ne connais pas cet animal
function checkAnimal(animal) {
    if (animal == 'chat' || animal == 'chien') {
        console.log('Vous aimez les animaux domestiques !');
    } else if (animal == 'lion' || animal == 'tigre') {
        console.log('Vous aimez les animaux sauvages !');
    } else if (animal == 'dauphin' || animal == 'otarie') {
        console.log('"Vous aimez les animaux marins !');
    } else {
        console.log('je ne connais pas cet animal');
    }
}
// checkAnimal('dauphin')

// Utiliser la methode switch pour faire la meme chose
function checkAnimalWithSwitch(animal) {
    switch (animal) {
        case 'chat':
        case 'chien':
            console.log('Vous aimez les animaux domestiques !');
            break;
        case 'lion':
        case 'tigre':
            console.log('Vous aimez les animaux sauvages !');
            break;
        case 'dauphin':
        case 'otarie':
            console.log('"Vous aimez les animaux marins !');
            break;
        default:
            console.log('je ne connais pas cet animal');
            break;
    }
}
checkAnimalWithSwitch('lion');

// Demander à l'utilisateur de rentrer un nombre
// Creer une fonction qui prend en parametre un nombre
// Et qui affiche dans la console si le nombre est pair ou impair (modulo)
// Appeler la fonction en lui passant le nombre 5 en parametre
// Appeler la fonction en lui passant le nombre 256 en parametre
const userNumber = 45;

const isEven = (number) => {
    if (number === 10) {
        console.log('le nombre est pair');
    } else {
        console.log('le nombre est impair');
    }
};
// const response = prompt('Quel est nombre')
// isEven(parseInt(response))

// Ecrire une fonction qui prend un nombre en parametre un nombre et qui resoud le probleme du fizzbuzz
// Si le nombre est divisible par 3 afficher dans un alert 'Fizz'
// Si le nombre est divisible par 5 afficher dans un alert 'Buzz'
// Si le nombre est divisible par 3 et 5 afficher dans un alert 'FizzBuzz'
// Sinon afficher dans un alert le nombre
// Appeler la fonction en lui passant un nombre
function fizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log('FizzBuzz');
    } else if (number % 3 == 0) {
        console.log('Fizz');
    } else if (number % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(number);
    }
}
fizzBuzz(300);

// ---------------------------------- Partie 4 ----------------------------------

// Faite une boucle qui affiche dans la console 5 fois le message suivant
// 'Je suis une boucle'
for (let i = 0; i < 5; i++) {
    console.log('Je suis une boucle');
}

// Faire une boucle qui affiche dans la console les nombres de 1 à 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console les nombres de 1 à ce nombre
const number = 34;

for (let i = 1; i <= number; i++) {
    console.log(i);
}

// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console la table de multiplication de ce nombre
// Exemple: Si l'utilisateur rentre 5, afficher dans la console
// '5 x 1 = 5'
// '5 x 2 = 10'
// '5 x 3 = 15'
const number2 = 45;

for (let i = 0; i <= 10; i++) {
    const res = number2 * i;
    console.log(`${number2} x ${i} = ${res}`);
}

// Faire une fonction qui prend en parametre un nombre
// Et qui affiche dans la console la table de multiplication de ce nombre
const multiplication = (number) => {
    for (let i = 0; i <= 10; i++) {
        const res = number * i;
        console.log(`${number} x ${i} = ${res}`);
    }
};
multiplication(100);

// Appeler la fonction en lui passant le nombre 5 en parametre
multiplication(5);
// Appeler la fonction en lui passant le nombre 7 en parametre
multiplication(7);
// Appeler la fonction en lui passant le nombre 9 en parametre
multiplication(9);

// ---------------------------------- Partie 5 ----------------------------------

// Déclarer un tableau contenant le nom des mois
const months = [
    'janvier',
    'fevrier',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'decembre',
];

// Afficher dans la console le mois de janvier
// Afficher dans la console le mois de avril
// Afficher dans la console le mois de octobre
console.log(months[0]);
console.log(months[3]);
console.log(months[9]);

// Faire une boucle qui affiche dans la console les mois de l'année
for (let i = 0; i < months.length; i++) {
    console.log(months[i]);
}

// Creer une fonction qui affiche dans la console les mois de l'année
// Appeler la fonction 2 fois
function displayMonth() {
    for (let i = 0; i < months.length; i++) {
        console.log(months[i]);
    }
}
displayMonth();

// Algorithme de calcul de moyenne avec tableau et boucle et fonction
// Déclarer un tableau qui contient les notes de l'utilisateur
// Déclarer une fonction qui prend en parametre un tableau, qui calcule la moyenne de l'utilisateur et qui retourne la moyenne
// Appeler la fonction en lui passant le tableau en parametre
function average(notes) {
    let result = 0;
    for (let i = 0; i < notes.length; i++) {
        result += notes[i];
    }
    return (result /= notes.length);
}
console.log(average(notes));

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
console.log(isPass(12));

// Déclarer une fonction qui prend en parametre une moyenne et qui retourne la mention de l'utilisateur
// Si la moyenne est supérieure ou égale à 16 => mention "Très bien"
// Si la moyenne est supérieure ou égale à 14 => mention "Bien"
// Si la moyenne est supérieure ou égale à 12 => mention "Assez bien"
// Si la moyenne est supérieure ou égale à 10 => mention "Passable"
// Sinon => mention "Insuffisant"
function mention(note) {
    if (note >= 16) {
        return 'Très bien';
    } else if (note >= 14) {
        return 'Bien';
    } else if (note >= 12) {
        return 'Assez bien';
    } else if (note >= 10) {
        return 'Passable';
    } else {
        return 'Insuffisant';
    }
}
console.log(mention);

// Avec l'aide des fonctions précédentes
// Déclarer une fonction qui prend en parametre un tableau de notes et un nom
// Calculer la moyenne de l'utilisateur
// Verifier si l'utilisateur est reçu ou non
// Recuperer la mention de l'utilisateur
// Afficher dans la console le nom de l'utilisateur, sa moyenne, s'il est reçu ou non et sa mention
function isGraduate(notes, lastName) {
    const res = parseInt(average(notes));
    isPass(res);
    let received = '';
    if (isPass(res) == true) {
        received = 'reçu';
    } else {
        received = 'recalé';
    }
    const ment = mention(res);

    return `${lastName} vous avez eu une moyenne de ${res}, vous êtes ${received} avec la mention : ${ment}`;
}
console.log(isGraduate([10, 12, 16], 'Edjekouane'));

// ---------------------------------- Partie 6 ----------------------------------

// Creer un objet car
//     marque => renault
//     modele => clio
//     couleur => rouge
//     liste des options => (array) => climatisation, vitres electriques, gps, bluetooth, siege chauffant
//     description => () => "La voiture est une renault clio rouge"
//     descriptionOptions => () => "La voiture est équipée de la climatisation, des vitres electriques, du gps, du bluetooth et des sieges chauffants"
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

// Afficher dans la console la description
console.log(car.description());

// Afficher dans la console la description des options
console.log(car.descriptionOptions());

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
users.forEach((user) => {
    console.log(user.description());
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
students.forEach(function (student) {
    console.log(student.nom + ' ' + student.prenom);
});

// 2. Afficher dans la console le nom et le prénom de chaque élève qui sont inscrits au cours de "Français" ou "Maths"
students.forEach(function (student) {
    for (let cour of student.cours) {
        if (cour == 'Français') {
            console.log(student.nom);
        }
    }
});

// 3. Afficher dans la console le nom et le prénom de chaque élève qui ont ete reçus (utiliser la fonction que vous avez créée dans la partie 5)

// 4. Afficher dans la console le nom et la moyenne de chaque élève

// 5. Afficher dans la console le nom et la moyenne de chaque élève
// si la moyenne est supérieure ou égale à 15
// Afficher dans la console 'vous obtenez une bourse'
// Si la moyenne estsupérieure ou égale à 10
// Afficher dans la console 'vous avez votre diplôme'
// Si en dessous de 10 et au dessus de 9
// Afficher dans la console 'vous allez en rattrapage'
// Si la moyenne est inférieure à 9
// Afficher dans la console 'vous redoublez'
