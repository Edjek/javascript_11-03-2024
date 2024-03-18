const colorButton = document.querySelector('#change-cl-btn');
const addParagraph = document.querySelector('#add-paragraph-btn');
const removeParagraph = document.querySelector('#remove-paragraph-btn');
const body = document.querySelector('body');

colorButton.addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
});

addParagraph.addEventListener('click', function () {
    const container = document.querySelector('.container');
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Nouveau paragraphe ajouté !';
    container.appendChild(paragraph);
});

removeParagraph.addEventListener('click', function () {
    const firstParagraph = document.querySelector('p');
    if (firstParagraph) {
        firstParagraph.remove();
    } else {
        alert("Il n'y a pas de paragraphe à supprimer !");
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
