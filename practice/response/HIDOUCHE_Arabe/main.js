/*                                                                                                                          Arabe HIDOUCHE
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
console.log(`Bonjour, je suis un message affiché dans la console`)

// Creer une variable qui contient un message de bienvenue
// 'Bonjour, je suis une variable qui contient un message de bienvenue'
// Afficher le message de bienvenue dans la console

const bien = `Bonjour, je suis une variable qui contient un message de bienvenue`; 
    console.log(bien);

// Creer une variable qui contient votre prenom
const firstName = `Arabe`;
// Afficher la console le message suivant avec la variable qui contient votre prenom
// 'Bonjour, je m'appelle XXXX'
console.log(`Bonjour, je m'appelle ${firstName}`);

// Afficher le message avec les 3 facons de faire une concaténation
console.log(`Bonjour, `+`je m\'appelle `+`${firstName}`);

// ---------------------------------- Partie 2 ----------------------------------

// Creer une fonction qui affiche un message de bienvenue dans la console
// 'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
// Appeler la fonction
function message () {
    console.log(`Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console`);
}
message(); 

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom
// 'Bonjour XXXX, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre'
// Appeler la fonction en lui passant votre prenom en parametre
function bienvenue(firstName){
    console.log(`Bonjour ${firstName}, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre`);
}
bienvenue(`Rachid`);

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom et un age
// 'Bonjour XXXX, vous avez XXXX ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres'
// Appeler la fonction en lui passant votre prenom et votre age en parametre
function firstNameAge(firstName, age) {
    console.log(`Bonjour `+ `${firstName}`+` , vous avez `+ `${age} `+ `ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres`);
}
firstNameAge(`Arabe`, `43`);
// ---------------------------------- Partie 3 ----------------------------------

// Déclarer une variable qui contient votre age
let age = 43;
// Si vous avez plus de 18 ans afficher dans la console 'Vous êtes majeur'
if (age > 18){
    console.log(`Vous étes majeur`);
}
// Sinon afficher dans la console 'Vous êtes mineur'
else{
    console.log(`Voust étes mineur`);
}

// Transformer la fonction pour retourner true si l'utilisateur est majeur et false sinon
 if ( age < 18){
    console.log(`false`);
 } else{
            console.log(`true`);
 }
// Si vous avez plus de 18 ans afficher dans la console 'Vous êtes majeur'
if (age > 18){
    console.log(`true`);
}
// Sinon afficher dans la console 'Vous êtes mineur'
else{
    console.log(`false`);
}

// Décider de l'animal préféré de l'utilisateur en fonction de son choix
//     Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
//     Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
//     Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
//     Sinon => je ne connais pas cet animal
let animalPrefere = prompt(`Quel est votre animal préféré ?`)
const animals = [`chien`, `chat`, `tigre`, `lion`, `dauphin`, `otarie`]
 if (animals == `chat`){
    console.log(`Vous aimez les animaux domestiques !`);   
    }else if (animals == ` chien`){
        console.log(`Vous aimez les animaux domestiques !`);
    }else if (animals == `otarie`){
        console.log(`Vous aimez les animaux marins !`);
    }else if(animals == `chat`){
        console.log(`Vous aimez les animaux domestiques !`);
    }else if (animals == `lion`){
        console.log(`Vous aimez les animaux sauvages !`);
    }else if (animals == `tigre`){
        console.log(`Vous aimez les animaux sauvages !`);
    }else if(animals == `dauphin`){
        console.log(`Vous aimez les animaux marins !`);
    }else{
        console.log(`Je ne connais pas cet animal`);
    };

 


// Transformer l'exercice en fonction qui prend en parametre un animal et qui retourne le message correspondant
function animalPref(animal){
    if (animalPref == `chat`){
            console.log(`Vous aimez les animaux domestiques !`);   
        }else if (animalPref == ` chien`){
            console.log(`Vous aimez les animaux domestiques !`);
        }else if (animalPref == `otarie`){
            console.log(`Vous aimez les animaux marins !`);
        }else if(animalPref == `chat`){
            console.log(`Vous aimez les animaux domestiques !`);
        }else if (animalPref == `lion`){
            console.log(`Vous aimez les animaux sauvages !`);
        }else if (animalPref == `tigre`){
            console.log(`Vous aimez les animaux sauvages !`);
        }else if(animalPref == `dauphin`){
            console.log(`Vous aimez les animaux marins !`);
        }else{
            console.log(`Je ne connais pas cet animal`);
        };

        animalPref(animal);
} 
// Utiliser la methode switch pour faire la meme chose
let animal = prompt(`Quel est votre animal préféré ?`) 
    switch (animal){
        case `chat`: 
            console.log(`Vous aimez les animaux domestiques !`);
            break;
        case `chien`:
            console.log(`Vous aimez les animaux domestiques !`);
            break;
        case `lion`:
            console.log(`Vous aimez les animaux sauvages !`);
            break;
        case `tigre`:
            console.log(`Vous aimez les animaux sauvages !`);
            break;
        case `dauphin`:
            console.log(`Vous aimez les animaux marins !`);
            break;
        case `otarie`:
            console.log(`Vous aimez les animaux marins !`);
            break;
        default:
            console.log(`Je ne connais pas cet animal`);
    }
    
// ---------------------------------- Partie 4 ----------------------------------
/*
// Faire une boucle qui affiche dans la console les nombres de 1 à 10
for (let i = 1; i < 10 + 1; i++){
console.log(i);}

// Demander à l'utilisateur de rentrer un nombre
let nbrUser = prompt(`Entrez un nombre`);
// Faire une boucle qui affiche dans la console les nombres de 1 à ce nombre
for (let i = 1; i < nbrUser.length + 1; i++){
console.log(i);}
// Faire une fonction qui prend en parametre un nombre
function multi(k){
// Et qui affiche dans la console la table de multiplication de ce nombre
for (let i = 0;t < 10; i++){
   console.log(`${i} x $(`k`) = ${i * `k`}`);
}
multi(5);
}
*/
// Algorithme de calcul de moyenne avec tableau
// Déclarer un tableau qui contient les notes de l'utilisateur [10, 15, 20]
// Calculer la moyenne de l'utilisateur
// Afficher dans la console la moyenne de l'utilisateur

// Déclarer une fonction qui prend en parametre une moyenne et qui retourne la mention de l'utilisateur
// Si la moyenne est supérieure ou égale à 10 => mention "Très bien"
// Si la moyenne est supérieure ou égale à 9 => mention "Bien"
// Si la moyenne est supérieure ou égale à 8 => mention "Assez bien"
// Si la moyenne est supérieure ou égale à 7 => mention "Passable"
// Si la moyenne est inférieure à 7 => mention "Insuffisant"

// Déclarer une fonction qui prend en parametre un tableau de notes et un nom
// Calculer la moyenne de l'utilisateur
// Verifier si l'utilisateur est reçu ou non (recu au dessus de 10)
// Recuperer la mention de l'utilisateur
// Afficher dans la console le nom de l'utilisateur, sa moyenne, s'il est reçu ou non et sa mention

// ---------------------------------- Partie 6 ----------------------------------
/*
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
    marque: `renault`,
    modele: `clio`,
    couleur: `rouge`,
    porte: 5,
    vitesse: 5,
    option: [`climatisation`, `vitres electriques`, `gps`, `bluetooth`, `siege chauffant`],
    descrription: function(){
       return `La voiture est une renault clio rouge de 5 portes et 5 vitesses`;
    },
    descrriptionOption: function(){
       return `La voiture est équipé de la ${this.option[0]}, des ${this.option[1]}, du ${this.option[2]}, du ${this.option[3]} et des ${this.option[4]}`;
    },
},

// Afficher dans la console la marque de la voiture
  //?      console.log(car[`marque`]);
// Afficher dans la console le modele de la voiture
    //?       console.log(car[`modele`]);
// Afficher dans la console la couleur de la voiture
  //?  console.log(car[`couleur`]);
// Afficher dans la console 'La voiture est une renault clio rouge de 5 portes et 5 vitesses'
   //?  console.log(car[`descrription`]);
// A l'aide d'une boucle for(), afficher dans la console la liste des options de la voiture
*/
// A l'aide d'une boucle forEach(), afficher dans la console la liste des options de la voiture

// A l'aide d'une boucle for(...of...), afficher dans la console la liste des options de la voiture

// Demander à l'utilisateur de saisir son prénom
// Demander à l'utilisateur de saisir son nom
// Demander à l'utilisateur de saisir son age
// Demander à l'utilisateur de saisir son sexe
// Demander à l'utilisateur de saisir son animal préféré

// Créer un objet utilisateur
//     prenom => prenom de l'utilisateur
//     nom => nom de l'utilisateur
//     age => age de l'utilisateur
//     sexe => sexe de l'utilisateur
//     animalPrefere => animal préféré de l'utilisateur
//     description => () => "Je m'appelle XXXX et j'ai XXXX ans et j'aime les XXXXX"

// Afficher dans la console la description de l'utilisateur
console.log(`Je ne connais pas cet animal`);
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

// Utiliser la méthode forEach()

// Utiliser la méthode for(...of...)

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

// 2. Afficher dans la console le nom et le prénom de chaque élève qui sont inscrits au cours de "Français" ou "Maths"

// 3. Afficher dans la console le nom et le prénom de chaque élève qui ont ete reçus (utiliser la fonction que vous avez créée dans la partie 5)
//
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
