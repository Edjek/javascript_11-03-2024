// Pour rendre exportable une fonction ou une variable, il faut ajouter export devant.
export function setMessageError(element, message) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.classList.add('message-error');
    element.parentElement.append(errorMessage);
}

export function removeMessages() {
    const messagesError = document.querySelectorAll('.message-error');

    if (messagesError) {
        for (let message of messagesError) {
            message.remove();
        }
    }
}
