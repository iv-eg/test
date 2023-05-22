const burger = document.querySelector('.header__burger');
const listBox = document.querySelector('.header__list-box');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    burger.classList.toggle('header__burger--active')
    listBox.classList.toggle('header__list-box--active')
    body.classList.toggle('lock')
})