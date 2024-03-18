//  Quand on clique sur ajouter un nouvelle element s'ajoute a la liste avec le texte qui a été tapé dans l'input
const submit = document.querySelector('#btn')
const list = document.querySelector('#todo-list')

submit.addEventListener('click', function(){
    const input = document.querySelector('#input')

    const item = document.createElement('li')
    item.textContent = input.value
    list.prepend(item)
})

list.addEventListener('click', function(e){
    e.target.style.textDecoration = 'line-through'
})

list.addEventListener('dblclick', function(e){
    e.target.remove()
})
// Quand on clique sur un element de la listecelui change et est barré

// Quand on double clique sur un lement de la liste celui ci est supprimé