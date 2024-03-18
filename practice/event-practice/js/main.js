const colorBtn = document.querySelector('#change-cl-btn');

colorBtn.addEventListener('click', function () {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'salmon';
});

const addParagraphBtn = document.querySelector('#add-paragraph-btn');

addParagraphBtn.addEventListener('click', function () {
    const container = document.querySelector('.container');

    const item = document.createElement('p');
    item.classList.add('item');
    item.textContent = 'Je suis un nouveau paragraphe';
    container.append(item);
});

const removeParagraphBtn = document.querySelector('#remove-paragraph-btn');

removeParagraphBtn.addEventListener('click', function () {
    const paragraphe = document.querySelector('.item');
    if (paragraphe) {
        paragraphe.remove();
    } else {
        alert("Il n'y a pas de paragraphe a supprimer");
    }
});
