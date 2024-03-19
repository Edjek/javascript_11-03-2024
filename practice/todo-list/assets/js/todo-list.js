const submit = document.querySelector('#btn');
const list = document.querySelector('#todo-list');

// corriger la creation d'element vide
submit.addEventListener('click', function () {
    const input = document.querySelector('#input');

    if (input.value != '') {
        const item = document.createElement('li');
        item.textContent = input.value;
        list.prepend(item);
    }
});

list.addEventListener('click', function (e) {
    e.target.style.textDecoration = 'line-through';
});

list.addEventListener('dblclick', function (e) {
    e.target.remove();
});
