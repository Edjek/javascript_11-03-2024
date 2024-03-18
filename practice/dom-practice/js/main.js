const detailsContainerParagraphe = document.querySelector(
    '#details-container-paragraphe'
);
detailsContainerParagraphe.style.fontStyle = 'italic';
detailsContainerParagraphe.style.fontWeight = 'bold';

const titles = document.querySelectorAll('.title');
for (let title of titles) {
    title.style.fontSize = '45px';
}

const avengers = document.querySelectorAll('.avenger');
for (let avenger of avengers) {
    avenger.style.fontSize = '30px';
}

const hulk = document.querySelector('#hulk');
hulk.remove();

const listItem = document.createElement('li');
listItem.textContent = 'Black Panther';
listItem.classList.add('avenger');
listItem.setAttribute('id', 'black-panther');

const listAvengers = document.querySelector('#list-avengers');
listAvengers.append(listItem);
