// ? Les modules permettent de découper le code en plusieurs fichiers pour une meilleur organisation et une meilleur lisibilté.
// * On peut changer le nom d'une fonction en lui attribuant un alias (il faudra donc utiliser son alias pour l'utiliser dans le fichier)
// import { setMessageError as rename, removeMessages } from './message.js'
import { setMessageError, removeMessages } from './message.js';

const formulaire = document.querySelector('#form-inscription');

// Pour un code plus clair et mieux maintenable on va découper notre code en fonction
formulaire.addEventListener('submit', function (e) {
    e.preventDefault();
    removeMessages();
    const isValidForm = checkValidity();

    if (isValidForm === true) {
        formulaire.submit();
    }
});

// Modifiez la fonction pour retourner true si y'a pas de message d'erreur et false sinon
function checkValidity() {
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const pswdField = document.querySelector('#pswd');
    const confirmPswdField = document.querySelector('#confirm-pswd');

    let success = false;
    if (nameField.value == '') {
        setMessageError(nameField, 'Veuillez indiquer votre nom.');
    } else if (emailField.value == '') {
        setMessageError(emailField, 'Veuillez indiquez votre email.');
    } else if (checkEmailValidity(email.value) === false) {
        setMessageError(emailField, 'Email invalide.');
    } else if (pswdField.value == '') {
        setMessageError(pswdField, 'Veuillez indiquez votre mot de passe.');
    } else if (confirmPswdField.value == '') {
        setMessageError(
            confirmPswdField,
            'Veuillez confirmer votre mot de passe'
        );
    } else if (checkPswdValidity(pswdField.value === false)) {
        setMessageError(
            pswdField,
            'Le mot de passe doit contenir au mois 8 caractères dont 1 majuscule, 1, chiffre et 1 caractère spécial'
        );
    } else if (pswdField.value !== confirmPswdField.value) {
        setMessageError(
            confirmPswdField,
            'Les mots de passe ne correspondent pas'
        );
    } else {
        success = true;
    }

    return success;
}

// Creer une fonction checkEmailValidity prend en parametre un element html
function checkEmailValidity(email) {
    return /^[a-z.-_]+@[a-zA-Z.-_]+.[a-zA-Z]{2,4}$/.test(email);
}

function checkPswdValidity(pswd) {
    return /^(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()-_+=]{8,}$/.test(
        pswd
    );
}
