/* --------------------------- DESTRUCTURING --------------------------- */

/*
    La Destructuration (destructuring) d'un tableau ou un objet signifie extraire des valeurs dans des variables distinctes.

    On peut même les renommer si une variable du même nom que la propriété existe déjà.
*/
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

// Destructuration de l'objet avenger
const {
    name: newName,
    realname,
    movies: [, avengerMovie],
    capacities: { armure, intellect, iaName },
    description,
} = avenger;

const message = description();
console.log(message);

console.log(avengerMovie);

// Créer un tableau de fruits
const fruits = ['pomme', 'banane', 'orange', 'fraise', 'kiwi'];

const [pomme, banane, , , newFruit] = fruits;
console.log(newFruit);

// destructurer le tableau fruit pour recuperer uniquement la 4ieme valeur
const [, , , fraise] = fruits;
console.log(fraise);

// Destructurer un objet Pikachu
const pokemon = {
    name: 'pikachu',
    type: 'electric',
    level: 25,
    trainer: {
        name: 'Sacha',
        city: 'paris',
    },
    bonus: [35, 67, 90],
};

const {
    name,
    trainer: { name: nameTrainer },
    bonus: [, , lastBonus],
} = pokemon;
console.log(name, nameTrainer, lastBonus);

// Exercice
const avengers = [
    {
        name: 'Tony Stark',
        alias: 'Iron Man',
        age: 40,
        powers: ['Powered Armor', 'Genius-Level Intellect'],
        team: 'Avengers',
        isAlive: true,
    },
    {
        name: 'Steve Rogers',
        alias: 'Captain America',
        age: 100,
        powers: ['Peak Human Strength', 'Master Tactician'],
        team: 'Avengers',
        isAlive: false,
    },
    {
        name: 'Bruce Banner',
        alias: 'Hulk',
        age: 45,
        powers: ['Superhuman Strength', 'Regenerative Healing Factor'],
        team: 'Avengers',
        isAlive: true,
    },
    {
        name: 'Natasha Romanoff',
        alias: 'Black Widow',
        age: 35,
        powers: ['Expert Spy', 'Martial Artist'],
        team: 'Avengers',
        isAlive: false,
    },
];

for (let avenger of avengers) {
    const {
        isAlive,
        alias,
        powers: [power1, power2],
        team,
    } = avenger;

    if (isAlive === true) {
        const card = document.createElement('div');
        card.classList.add('card-hero')

        const title = document.createElement('h2');
        title.textContent = alias;
        card.append(title);

        const listPower = document.createElement('ul');

        const listItem = document.createElement('li');
        listItem.textContent = power1;
        const listItem2 = document.createElement('li');
        listItem2.textContent = power2;
        listPower.append(listItem);
        listPower.append(listItem2);

        card.append(listPower);

        const cardContent = document.createElement('p');
        cardContent.textContent = `je fais parti de l'equipe ${team}`;

        card.append(cardContent);

        const container = document.querySelector('#container')
        container.append(card)
    }
}
