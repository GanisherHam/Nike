const lists = document.querySelector('.header-lists');
const burger = document.querySelector('.burger-menu'); 

burger.addEventListener(`click`, () => {
    lists.classList.toggle('active');
})