// ----------------------- STUDENTS ----------------------- //

const students = [
    { nom: 'Jean', age: 21, notes: [15, 18, 17] },
    { nom: 'Marie', age: 20, notes: [14, 16, 19] },
    { nom: 'Pierre', age: 22, notes: [17, 18, 15] },
    { nom: 'Sophie', age: 19, notes: [16, 17, 18] },
];

// Calculer la moyenne des notes de chaque étudiant : en utilisant reduce()
function calculerMoyenneNotes(etudiants) {
    etudiants.forEach((etudiant) => {
        const moyenne =
            etudiant.notes.reduce((acc, note) => acc + note, 0) /
            etudiant.notes.length;
        console.log(`${etudiant.nom} a une moyenne de ${moyenne.toFixed(2)}`);
    });
}

calculerMoyenneNotes(students);

// Trouver l'étudiant avec la meilleure moyenne :
function calculerMoyenneNotes(etudiants) {
    etudiants.forEach((etudiant) => {
        const moyenne =
            etudiant.notes.reduce((acc, note) => acc + note, 0) /
            etudiant.notes.length;
        console.log(`${etudiant.nom} a une moyenne de ${moyenne.toFixed(2)}`);
    });
}

calculerMoyenneNotes(students);

// ----------------------- SANGOKU ----------------------- //
const sangoku = {
    nom: 'Sangoku',
    race: 'Saiyan',
    age: 35,
    transformations: [
        'Super Saiyan',
        'Super Saiyan 2',
        'Super Saiyan 3',
        'Super Saiyan God',
        'Super Saiyan Blue',
    ],
    techniques: {
        kamehameha: true,
        genkidama: true,
        kaioKen: true,
        teleportation: true,
    },
    amis: ['Vegeta', 'Piccolo', 'Krilin', 'Yamcha', 'Ten Shin Han'],
    ennemis: ['Freezer', 'Cell', 'Majin Buu'],
};

console.log(sangoku);

// Déstructuration du nom, de la race et de l'âge de Sangoku :
const { nom, race, age } = sangoku;
console.log(`Nom: ${nom}, Race: ${race}, Âge: ${age}`);

// Déstructuration des techniques de combat de Sangoku :
const { techniques: { kamehameha, genkidama, kaioKen, teleportation } } = sangoku;
console.log("Techniques de combat de Sangoku:");
console.log("- Kamehameha:", kamehameha);
console.log("- Genkidama:", genkidama);
console.log("- Kaio-Ken:", kaioKen);
console.log("- Téléportation:", teleportation);

// Déstructuration des amis de Sangoku :
const { amis:[vegeta, piccolo, krilin, yamcha, tenShinHan] } = sangoku;
console.log("Amis de Sangoku:", ennemis);
