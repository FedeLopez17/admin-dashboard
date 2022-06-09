const hamburguerButton = document.querySelector(".hamburguer.button");
const sidebar = document.querySelector(".sidebar");
const sidebarElements = document.querySelectorAll(".sidebar > div");
const main = document.querySelector(".row.bottom.main");
const navbar = document.querySelector(".row.top.navbar");
const navbarRight = document.querySelector(".navbar.right");
hamburguerButton.addEventListener("click", toggleSidebar);

function toggleSidebar(){
    sidebar.classList.toggle("show-sidebar");
    console.log(sidebarElements);
    for (let i = 0; i < 10; i++){
         sidebarElements[i].classList.toggle("show-sidebar");
     }
    moveAndChangeHamburguer();
    blur(main);
    // The purpose of increasing the navbar's index is so that it doesn't reflect the blur of the element below. 
    increaseIndex(navbar);
    hide(navbarRight);
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

function hide(element){
    element.classList.toggle("hidden");
}