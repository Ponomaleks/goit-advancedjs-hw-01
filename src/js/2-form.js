import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };

form.addEventListener('input', _.throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

function loadFromLocalStorage(key) {
  try {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : null;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
}

function onInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveToLocalStorage('feedback-form-state', formData);
}

function onSubmit(event) {
  event.preventDefault();
  const savedData = loadFromLocalStorage('feedback-form-state');
  if (!savedData || !savedData.email || !savedData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(savedData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  const savedData = loadFromLocalStorage('feedback-form-state');
  if (savedData) {
    formData.email = savedData.email || '';
    formData.message = savedData.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  } else {
    formData.email = '';
    formData.message = '';
  }
});
