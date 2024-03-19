// ? Les modules permettent de découper le code en plusieurs fichiers pour une meilleur organisation et une meilleur lisibilté.
// On peut changer le nom d'une fonction en lui attribuant un alias
// import { setMessageError as rename, removeMessages } from './message.js'
import { setMessageError, removeMessages } from './message.js';

const formulaire = document.querySelector('#form-inscription');

formulaire.addEventListener('submit', function (e) {
    e.preventDefault();
    removeMessages();
    const isValidForm = checkValidity();
    if(isValidForm === true){

    }
});

function checkValidity() {
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const pswdField = document.querySelector('#pswd');
    const confirmPswdField = document.querySelector('#confirm-pswd');

    if (nameField.value == '') {
        setMessageError(nameField, 'veuillez indiquer votre nom');
    } else if (emailField.value == '') {
        setMessageError(emailField, 'Veuillez indiquez votre email');
    } else if (pswdField.value == '') {
        setMessageError(pswdField, 'Veuillez indiquez votre mot de passe');
    } else if (confirmPswdField.value == '') {
        setMessageError(
            confirmPswdField,
            'Veuillez indiquez votre mot de passe encore une fois'
        );
    } else if (pswdField.value !== confirmPswdField.value) {
        setMessageError(
            confirmPswdField,
            'Vos mots de passe ne sont pas identiques'
        );
    }
}
