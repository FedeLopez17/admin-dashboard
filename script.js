const hamburguerButton = document.querySelector(".hamburguer.button");
const sidebar = document.querySelector(".sidebar");
const sidebarElements = document.querySelectorAll(".sidebar > div");
const main = document.querySelector(".row.bottom.main");
const navbarRight = document.querySelector(".navbar.right");
hamburguerButton.addEventListener("click", toggleSidebar);

function disableSelection(){
    return false;
}

sidebar.onselectstart = disableSelection; 

function toggleSidebar(){
    sidebar.classList.toggle("show-sidebar");
    console.log(sidebarElements);
    for (let i = 0; i < 10; i++){
         sidebarElements[i].classList.toggle("show-sidebar");
     }
    moveAndChangeHamburguer();
    blur(main);
    hide(navbarRight);
}

function moveAndChangeHamburguer(){
    hamburguerButton.classList.toggle("move-hamburguer");
    hamburguerButton.classList.toggle("change");
}

function blur(element){
    element.classList.toggle("blur");
}

function hide(element){
    element.classList.toggle("hidden");
}
