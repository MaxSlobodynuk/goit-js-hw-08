import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'; 

const formData = {};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


emailInput.addEventListener('input', onEmailInput);
messageInput.addEventListener('input', throttle(onMessageInput, 500));
form.addEventListener('submit', onFormSubmit);

// form.addEventListener('input', evt => {
//     formData[evt.target.name] = evt.target.value;
//     console.log(formData);
// });

// populateMessage();


// function onMessageInput(evt) {
//     const message = evt.target.value;

//     localStorage.setItem(STORAGE_KEY, message);
// }

// function onFormSubmit(evt) {
//     evt.preventDefault();
    
//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
// }

// function populateMessage() {
//     const sevedMessage = localStorage.getItem(STORAGE_KEY);

//     if (sevedMessage) {
//         messageInput.value = sevedMessage;
//     }
// }



form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value;
    saveFormData();
    });

    populateForm();

    function onEmailInput(evt) {
        const email = evt.target.value;
        formData[evt.target.name] = email;
        saveFormData();
    }

    function onMessageInput(evt) {
        const message = evt.target.value;
        formData[evt.target.name] = message;
        saveFormData();
    }

    function onFormSubmit(evt) {
        evt.preventDefault();

        evt.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        formData.email = '';
        formData.message = '';
        console.log(formData);
    }

    function saveFormData() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }

    function populateForm() {
        const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
        const parsedData = JSON.parse(savedData);
        emailInput.value = parsedData.email || '';
        messageInput.value = parsedData.message || '';
        }
    }

