const hamburguerButton = document.querySelector(".hamburguer.button");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".row.bottom.main");
const navbar = document.querySelector(".row.top.navbar");
hamburguerButton.addEventListener("click", toggleSidebar);

function toggleSidebar(){
    sidebar.classList.toggle("show-sidebar");
    moveAndChangeHamburguer();
    blur(main);
    // The purpose of increasing the navbar's index is so that it doesn't reflect the blur of the element below. 
    increaseIndex(navbar);
}

function moveAndChangeHamburguer(){
    hamburguerButton.classList.toggle("move-hamburguer");
    hamburguerButton.classList.toggle("change");
}

function blur(element){
    element.classList.toggle("blur");
}

function increaseIndex(element){
    element.classList.toggle("increase-index");
}