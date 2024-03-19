/* --------------------------- DESTRUCTURING --------------------------- */

const avenger = {
    name: 'Iron Man',
    realname: 'Tony Stark',
    movies: ['Iron Man', 'Avengers', 'Iron Man 2', 'Avengers : Infinity War'],
    capacities: {
        armure: 'motorisée',
        intellect: 'niveau genie',
        iaName: 'Jarviss',
    },
    description: function () {
        return `${this.name} Milliardaire, génie, playboy, philanthrope`;
    },
};

console.log();
console.log();
console.log();
// Afficher nom
// Afficher Le premier du tableau
// Afficher le nom de son ia
// Appeler la method description et afficher le texte













const avengers = [
    {
        nom: "Iron Man",
        vraiNom: "Tony Stark",
        alias: "Iron Man",
        capacites: ["Intellect de niveau génie", "Armure motorisée"],
        equipement: {
            casque: "Casque d'Iron Man",
            armure: "Armure Iron Man Mark LXXXV",
            armes: ["Répulseurs", "Rayon unibeam", "Missiles"]
        },
        films: ["Iron Man", "Avengers", "Iron Man 2", "Avengers : L'Ère d'Ultron", "Iron Man 3", "Avengers : Infinity War", "Avengers : Endgame"]
    },
    {
        nom: "Captain America",
        vraiNom: "Steve Rogers",
        alias: "Capitaine America",
        capacites: ["Force surhumaine", "Agilité", "Maîtrise des arts martiaux"],
        equipement: {
            bouclier: "Bouclier en vibranium",
            costume: "Costume de Captain America",
            armes: ["Bouclier", "Mjolnir (temporairement)"]
        },
        films: ["Captain America : First Avenger", "Avengers", "Captain America : Le Soldat de l'Hiver", "Avengers : L'Ère d'Ultron", "Captain America : Civil War", "Avengers : Infinity War", "Avengers : Endgame"]
    },
    {
        nom: "Thor",
        vraiNom: "Thor Odinson",
        alias: "Dieu du Tonnerre",
        capacites: ["Force surhumaine", "Vol", "Contrôle sur la foudre"],
        equipement: {
            marteau: "Mjolnir",
            costume: "Armure Asgardienne"
        },
        films: ["Thor", "Avengers", "Thor : Le Monde des ténèbres", "Avengers : L'Ère d'Ultron", "Thor : Ragnarok", "Avengers : Infinity War", "Avengers : Endgame"]
    }
    // Ajoutez d'autres membres des Avengers au besoin
];
