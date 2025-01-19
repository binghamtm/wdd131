const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#lastModified")


const today = new Date();

currentYear.innerHTML = today.getFullYear();
lastModified.innerHTML = document.lastModified

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('ul');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})