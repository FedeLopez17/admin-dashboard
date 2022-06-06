const hamburguerButton = document.querySelector(".hamburguer.button");
const sidebar = document.querySelector(".sidebar")
hamburguerButton.addEventListener("click", toggleSidebar);

function toggleSidebar(){
    sidebar.classList.toggle("show-sidebar");
    moveAndChangeHamburguer();
}

function moveAndChangeHamburguer(){
    hamburguerButton.classList.toggle("move-hamburguer");
    hamburguerButton.classList.toggle("change");
}