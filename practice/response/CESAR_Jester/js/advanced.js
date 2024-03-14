// ----------------------- STUDENTS ----------------------- //

const students = [
    { nom: 'Jean', age: 21, notes: [15, 18, 17] },
    { nom: 'Marie', age: 20, notes: [14, 16, 19] },
    { nom: 'Pierre', age: 22, notes: [17, 18, 15] },
    { nom: 'Sophie', age: 19, notes: [16, 17, 18] },
];

// Calculer la moyenne des notes de chaque étudiant : en utilisant reduce()
students.forEach(function(student){
    let moyenne = student.notes.reduce((x,y) => x+y ,0) / student.notes.length;
    console.log(student.nom+ ": "+ moyenne)
})

// Trouver l'étudiant avec la meilleure moyenne :
let meilleur = null
let moyenne =0
students.forEach(function(student){
    let moyenneEtu = student.notes.reduce((x,y) => x+y ,0) / student.notes.length
    if(moyenneEtu>moyenne){
        meilleur = student.nom
        moyenne = moyenneEtu
    }
        
})
console.log(`L'étudiant avec la meilleure note est: ${meilleur}`)


// ----------------------- SANGOKU ----------------------- //
const sangoku = {
    nom: "Sangoku",
    race: "Saiyan",
    age: 35,
    transformations: ["Super Saiyan", "Super Saiyan 2", "Super Saiyan 3", "Super Saiyan God", "Super Saiyan Blue"],
    techniques: {
        kamehameha: true,
        genkidama: true,
        kaioKen: true,
        teleportation: true
    },
    amis: ["Vegeta", "Piccolo", "Krilin", "Yamcha", "Ten Shin Han"],
    ennemis: ["Freezer", "Cell", "Majin Buu"]
};

console.log(sangoku);

// Déstructuration du nom, de la race et de l'âge de Sangoku :
const {nom,race,age} =sangoku
console.log(`Nom: ${nom}, Race: ${race}, Age: ${age}`)

// Déstructuration des techniques de combat de Sangoku :
const {techniques: {kamehameha, genkidama, kaioKen, teleportation}} =sangoku
console.log(`Techniques: Kamehameha: ${kamehameha}, Genkidama: ${genkidama}, KaioKen: ${kaioKen}, Teleportation: ${teleportation}`)

// Déstructuration des amis de Sangoku :
const {amis} = sangoku
console.log('Amis de Sangoku: '+ amis.join(', '))