const listColor = document.querySelector('#list-color')

listColor.addEventListener('change', function(event){
    const body = document.querySelector('body')
    body.style.backgroundColor = event.target.value
})