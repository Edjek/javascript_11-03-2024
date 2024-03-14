/*
    Jester CESAR
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
let variable = 'Bonjour, je suis une variable qui contient un message de bienvenue'
console.log(variable)

// Creer une variable qui contient votre prenom
// Afficher la console le message suivant avec la variable qui contient votre prenom
// 'Bonjour, je m'appelle XXXX'
const prenom = 'Jester'
console.log(`Bonjour, je m'appelle ${prenom}`)

// Afficher le message avec les 3 facons de faire une concaténation
console.log('Bonjour, je m\'appelle '+ prenom)
console.log("Bonjour, je m'appelle "+ prenom)

// ---------------------------------- Partie 2 ----------------------------------

// Creer une fonction qui affiche un message de bienvenue dans la console
// 'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
// Appeler la fonction
function affiche(){
    console.log(`Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console`)
}

affiche()

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom
// 'Bonjour XXXX, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre'
// Appeler la fonction en lui passant votre prenom en parametre
function afficheMessage(nom){
    console.log(`Bonjour ${nom}, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre`)
}
afficheMessage('Jester')

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom et un age
// 'Bonjour XXXX, vous avez XXXX ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres'
// Appeler la fonction en lui passant votre prenom et votre age en parametre
function afficheMessageAge(nom, age){
    console.log(`Bonjour ${nom}, vous avez ${age} ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres`)
}
afficheMessageAge('Jester', 24)

// ---------------------------------- Partie 3 ----------------------------------

// Déclarer une variable qui contient votre age
// Si vous avez plus de 18 ans afficher dans la console 'Vous êtes majeur'
// Sinon afficher dans la console 'Vous êtes mineur'
let age = 24
if (age >= 18){
    console.log(`Vous êtes majeur`)
}else{
    console.log(`Vous êtes mineur`)
}

// Transformer la fonction pour retourner true si l'utilisateur est majeur et false sinon
function ageTrue(age){
    age = 24
    const isTrue = true
    const isFalse = false
    if (age >= 18){
        return isTrue
    }else{
        return isFalse
    }
}
console.log(ageTrue())

// Décider de l'animal préféré de l'utilisateur en fonction de son choix
//     Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
//     Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
//     Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
//     Sinon => je ne connais pas cet animal

let user = prompt(`Quel est votre animal préféré ?`)
if(user === 'chat' || user === 'chien'){
    console.log(`Vous aimez les animaux domestiques !`)
}else if(user === 'lion' || user === 'tigre'){
    console.log(`Vous aimez les animaux sauvages !`)
}else if(user === 'dauphin' || user === 'otarie'){
    console.log(`Vous aimez les animaux marins !`)
}else{
    console.log(`je ne connais pas cet animal`)
}

// Transformer l'exercice en fonction qui prend en parametre un animal et qui retourne le message correspondant
function animals(animal){
    if(animal === 'chat' || animal === 'chien'){
        return `Vous aimez les animaux domestiques !`
    }else if(animal === 'lion' || animal === 'tigre'){
        return `Vous aimez les animaux sauvages !`
    }else if(animal === 'dauphin' || animal === 'otarie'){
        return `Vous aimez les animaux marins !`
    }else{
        return `je ne connais pas cet animal`
    }
}
console.log(animals('chien'))

// Utiliser la methode switch pour faire la meme chose
let animaux = prompt(`Quel est votre animal préféré ?`)
switch(animaux){
    case 'chat' || 'chien':
        console.log(`Vous aimez les animaux domestiques !`)
        break
    case 'lion' || 'tigre':
        console.log(`Vous aimez les animaux sauvages !`)
        break
    case 'dauphin' || 'otarie':
        console.log(`Vous aimez les animaux marins !`)
        break
    default:
        console.log(`je ne connais pas cet animal`)
}

// ---------------------------------- Partie 4 ----------------------------------

// Faire une boucle qui affiche dans la console les nombres de 1 à 10
for(let i=1; i<=10; i++){
    console.log(i)
}

// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console les nombres de 1 à ce nombre
let nombre = prompt('Donnez moi un nombre')
for(let j=1; j<= nombre; j++){
    console.log(j)
}

// Faire une fonction qui prend en parametre un nombre
// Et qui affiche dans la console la table de multiplication de ce nombre
function multiplication(nombre){
    for(let i=0; i<=10; i++){
        console.log(`${i} x ${nombre} = ${i*nombre}`)
    }
}
multiplication(2)

// Algorithme de calcul de moyenne avec tableau
// Déclarer un tableau qui contient les notes de l'utilisateur [10, 15, 20]
// Calculer la moyenne de l'utilisateur
// Afficher dans la console la moyenne de l'utilisateur
const notesUtilisateur = [10, 15, 20]
let moyen = 0
for(let k=0; k<notesUtilisateur.length; k++){
    moyen = moyen + notesUtilisateur[k]
    moyen = moyen/ (notesUtilisateur.length -1)
}
console.log(`La moyenne est ${moyen}`)

// Déclarer une fonction qui prend en parametre une moyenne et qui retourne la mention de l'utilisateur
// Si la moyenne est supérieure ou égale à 10 => mention "Très bien"
// Si la moyenne est supérieure ou égale à 9 => mention "Bien"
// Si la moyenne est supérieure ou égale à 8 => mention "Assez bien"
// Si la moyenne est supérieure ou égale à 7 => mention "Passable"
// Si la moyenne est inférieure à 7 => mention "Insuffisant"
function moyennes(moyenne){
    if(moyenne>=10){
        return `mention "Très bien"`
    }else if(moyenne>=9){
        return `mention "Bien"`
    }else if(moyenne>=8){
        return `mention "Assez bien"`
    }else if(moyenne<7){
        return `mention "Insuffisant"`
    }else{
        return `je n'ai rien compris`
    }
}
console.log(moyennes(11))

// Déclarer une fonction qui prend en parametre un tableau de notes et un nom
// Calculer la moyenne de l'utilisateur
// Verifier si l'utilisateur est reçu ou non (recu au dessus de 10)
// Recuperer la mention de l'utilisateur
// Afficher dans la console le nom de l'utilisateur, sa moyenne, s'il est reçu ou non et sa mention
function notes(array, nom){
    for(let i =0; i< array.length; i++){
        let moyenne =0
        if(array[i][0] === nom){
            for(let j=1; j< array[i].length; j++){ 
                moyenne = moyenne + array[i][j]
                
            }moyenne = moyenne/ (array[i].length -1)
            console.log(`La moyenne de ${array[i][0]} est ${moyenne}`)
        }moyennes(moyenne)
        if(moyenne<10){
            return `Vous etes reçu`
        }else{
            return `Vous n'etes pas reçu`
        }
    }
    
}
console.log(notes(notesUtilisateur, 'Jester'))

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
let voiture = {
    marque: 'renault',
    modele: 'clio',
    couleur: 'rouge',
    nombreDePorte: 5,
    nombreDeVitesses: 5,
    listesDesOptions: ['climatisation','vitres electriques','gps', 'bluetooth', 'siege chauffant'],
    decrire: function(){
        return `La voiture est une ${this.marque} ${this.modele} ${this.couleur} de ${this.nombreDePorte} portes et ${this.nombreDeVitesses} vitesses`
    },
    decrireOptions: function(){
        return `La voiture est équipée de la climatisation, des vitres electriques, du gps, du bluetooth et des sieges chauffants`
    }
}

// Afficher dans la console la marque de la voiture
// Afficher dans la console le modele de la voiture
// Afficher dans la console la couleur de la voiture
console.log(voiture.marque)
console.log(voiture.modele)
console.log(voiture.couleur)

// Afficher dans la console 'La voiture est une renault clio rouge de 5 portes et 5 vitesses'
console.log(voiture.decrire())

// A l'aide d'une boucle for(), afficher dans la console la liste des options de la voiture
for(let m=0; m< voiture.listesDesOptions.length; m++){
    console.log(voiture.listesDesOptions[m])
}

// A l'aide d'une boucle forEach(), afficher dans la console la liste des options de la voiture
voiture.listesDesOptions.forEach(function(option){
    console.log(option)
})

// A l'aide d'une boucle for(...of...), afficher dans la console la liste des options de la voiture
for(let options of voiture.listesDesOptions){
    console.log(options)
}

// Demander à l'utilisateur de saisir son prénom
// Demander à l'utilisateur de saisir son nom
// Demander à l'utilisateur de saisir son age
// Demander à l'utilisateur de saisir son sexe
// Demander à l'utilisateur de saisir son animal préféré
let firstName = prompt('Quel est ton prénom')
let lastName = prompt('Quel est ton nom')
let year = prompt('Quel age a tu?')
let sexe = prompt('Quel est ton sexe?')
let animalPref = prompt(`Quel est t-on animal préféré?`)

// Créer un objet utilisateur
//     prenom => prenom de l'utilisateur
//     nom => nom de l'utilisateur
//     age => age de l'utilisateur
//     sexe => sexe de l'utilisateur
//     animalPrefere => animal préféré de l'utilisateur
//     description => () => "Je m'appelle XXXX et j'ai XXXX ans et j'aime les XXXXX"
let utilisateurs = {
    prenom: firstName,
    nom: lastName,
    age: year,
    sexe: sexe,
    animalPrefere: animalPref,
    description: function(){
        return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${this.age} ans et j'aime les ${this.animalPrefere}`
    }
}

// Afficher dans la console la description de l'utilisateur
console.log(utilisateurs.description())

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
for(let n=0; n<users.length; n++){
    console.log(users[n].description())
}

// Utiliser la méthode forEach()
users.forEach(function(user){
    console.log(user.description())
})

// Utiliser la méthode for(...of...)
for(let userss of users){
    console.log(userss.description())
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
students.forEach(function(student){
    console.log(student.nom + " "+ student.prenom)
})

// 2. Afficher dans la console le nom et le prénom de chaque élève qui sont inscrits au cours de "Français" ou "Maths"
for(let p=0; p<students.length; p++){
    if(students[p].cours.includes('Français') || students[p].cours.includes('Maths')){
        console.log(students[p].nom + " "+ students[p].prenom)
    }
}

// 3. Afficher dans la console le nom et le prénom de chaque élève qui ont ete reçus (utiliser la fonction que vous avez créée dans la partie 5)

function notesStudents(array, nom, prenom){
    let moyenne
    let somme = 0
    for(let i =0; i<array.length; i++){
        somme = somme + array[i]
        
    }moyenne = somme/ (array.length)
    console.log(`La moyenne est de ${moyenne}`)
    moyennes(moyenne)
    if(moyenne>10){
        return `${nom} ${prenom} vous etes reçu`
    }else{
        return `${nom} ${prenom} vous n'etes pas reçu`
    }
    
}
students.forEach(function(student){
    console.log(notesStudents(student.notes, student.nom, student.prenom))
})

// 4. Afficher dans la console le nom et la moyenne de chaque élève
students.forEach(function(student){
    let moyenne
    let somme = 0
    for(let i =0; i<student.notes.length; i++){
        somme = somme + student.notes[i]
        
    }moyenne = somme/ (student.notes.length)
    console.log(`La moyenne de ${student.nom} est de ${moyenne}`)
})

// 5. Afficher dans la console le nom et la moyenne de chaque élève
// si la moyenne est supérieure ou égale à 15
// Afficher dans la console 'vous obtenez une bourse'
// Si la moyenne estsupérieure ou égale à 10
// Afficher dans la console 'vous avez votre diplôme'
// Si en dessous de 10 et au dessus de 9
// Afficher dans la console 'vous allez en rattrapage'
// Si la moyenne est inférieure à 9
// Afficher dans la console 'vous redoublez'
function afficheStudent(array, nom, prenom){
    let moyenne
    let somme = 0
    for(let i =0; i<array.length; i++){
        somme = somme + array[i]
        
    }moyenne = somme/ (array.length)
    console.log(`La moyenne de ${nom} ${prenom} est de ${moyenne}`)

    if(moyenne>15){
        return `vous obtenez une bourse`
    }else if(moyenne>=10){
        return `vous avez votre diplôme`
    }else if(moyenne>10 && moyenne>9){
        return `vous allez en rattrapage`
    }else if(moyenne<9){
        return `vous redoublez`
    }
}
students.forEach(function(student){
    console.log(afficheStudent(student.notes, student.nom, student.prenom))
})
