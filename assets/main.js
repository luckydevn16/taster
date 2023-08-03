// Modal Window
let modalWindow = document.querySelector("#modalFormWindow");
let modalContent = document.querySelector(".modal-window-content");
let body = document.querySelector("body");

const openModal = () => {
    modalWindow.classList.add('active');
    body.classList.add('blocked');
}

window.onclick = (event) => {
    if (event.target == modalWindow) {
        modalWindow.classList.remove('active');
        body.classList.remove('blocked');
        modalContent.style.display = 'block';
        modalThankyouContent.style.display = 'none';
    }
}
// Form Submission
let nameValue = document.querySelector('.name');
let lastnameValue = document.querySelector('.lastname');
let emailValue = document.querySelector('.email');
let requiredFields = document.querySelector('.required-fields');
let modalThankyouContent = document.querySelector('.modal-thankyou-content');

const formSubmission = () => {
    if (nameValue.value != '' && lastnameValue.value != '' && emailValue.value != '') {
        modalContent.style.display = 'none';
        modalThankyouContent.style.display = 'block';
        nameValue.value = '';
        lastnameValue.value = '';
        emailValue.value = '';
    } else {
        requiredFields.classList.add('visible');
    }
}

const inputFields = document.querySelectorAll('.name, .lastname, .email');
for (let inputItem of inputFields) {
    inputItem.addEventListener('focus', function() {
        if (requiredFields.classList.contains('visible')) {
            requiredFields.classList.remove('visible');
        }
    });
}
// Mobile Menu
let menuBtn = document.querySelector('.menu-btn');
let mainNavMenu = document.querySelector('.main-nav');
let menuBtnArrow = document.querySelector('.menu-btn-arrow');

const mobileMenuOpening = () => {
    mainNavMenu.classList.toggle('open');
    menuBtn.classList.toggle('open');
    menuBtnArrow.classList.toggle('open');
}
