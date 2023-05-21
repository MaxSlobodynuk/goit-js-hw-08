import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state'; 

const formData = {};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');


form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput (evt) {
    formData[evt.target.name] = evt.target.value;
    saveFormData();
};

    populateForm();

    function onFormSubmit(evt) {
        evt.preventDefault();
        console.log(formData);
        localStorage.removeItem(STORAGE_KEY);
        formData.email = '';
        formData.message = '';
        evt.currentTarget.reset();
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
        formData.email = emailInput.value;
        formData.message = messageInput.value;
        }
    }




