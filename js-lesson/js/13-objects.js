/* --------------------------- OBJECTS --------------------------- */

// ? Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble.

const individual = {
    firstName: 'Rachid',
    lastname: 'EDJEKOUANE',
    age: 40,
    education: ['css', 'html', 'git', 'javascript'],
    ocupation: {
        name: 'formateur',
        hour: 35,
    },
    getIdentification: function () {
        return `Je m'appelle Rachid EDJEKOUANE`;
    },
};

// * Pour acceder à la propriété d'un objet on utilise le .

// console.log(individual.firstName);
// console.log(individual.ocupation.name.toUpperCase());
// const identity = individual.getIdentification()
// console.log(identity);

// Boucle for(...of...){}
for (let module of individual.education) {
    // console.log(module);
}

const car = {
    model: 'Camry',
    make: 'Toyota',
    year: 2022,
    color: 'blue',
    features: ['Air Conditioning', 'Power Windows', 'Bluetooth'],
    owner: {
        name: 'John Doe',
        age: 30,
    },
    start: function () {
        return 'The car is starting';
    },
    // Fonction Anonyme
    drive: function () {
        return 'The car is in motion';
    },
    // Fonction fléchée
    honk: () => {
        return 'Beep beep';
    },
    // `this` permet d'acccéder à l'objet courant quand on utilise une fonction anonyme (ici car)
    // Mais puisqu'en Javascript tout découle de l'objet `window`, dans une fonction fléchée, `this` permet de faire reference à `window`
    description: function () {
        return `La voiture est une ${this.make} ${this.model} de ${this.year}`;
    },
};

// On peut aussi accéder à la propriété d'un objet grâce aux [] et en précisant sa clé comme chaine de caractère
console.log(car['make']);

// * Boucle `for(..in...){}`, les objets sont des énumérables
for (let key in car) {
    // console.log(car[key]);
}

const displayDescription = car.description();
console.log(displayDescription);
console.log(car.owner.name);
console.log(car.year);

for (let i = 0; i < car.features.length; i++) {
    // console.log(car.features[i]);
}

car.features.forEach(function (feature) {
    // console.log(feature);
});
