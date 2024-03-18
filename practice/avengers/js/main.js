const listMovies = document.querySelector('#list-movies');

listMovies.addEventListener('click', function (e) {
    if (e.target.style.fontSize == '' || e.target.style.fontSize == '16px') {
        e.target.style.fontSize = '35px';
    } else {
        e.target.style.fontSize = '16px';
    }
});

listMovies.addEventListener('dblclick', function (e) {
    const container = document.querySelector('#container');
    const titleMovie = document.querySelector('.title');

    if (titleMovie != null) {
        titleMovie.remove();
    }

    const title = document.createElement('h2');
    title.textContent = e.target.textContent;
    title.classList.add('title');
    container.prepend(title);
});
