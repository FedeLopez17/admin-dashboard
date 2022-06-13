const hamburguerButton = document.querySelector(".hamburguer.button");
const sidebar = document.querySelector(".sidebar");
const sidebarElements = document.querySelectorAll(".sidebar > div");
const main = document.querySelector(".row.bottom.main");
const navbar = document.querySelector(".row.top.navbar");
const navbarRight = document.querySelector(".navbar.right");
const dashboard = document.querySelector("div.dashboard");
const dashboardIcon = document.querySelector("div.dashboard > img");
const friends = document.querySelectorAll("img.profile-picture");
const messageDiv = document.querySelector("div.message");
const closeButton = messageDiv.lastElementChild.firstElementChild;
const outerContainer = document.querySelector(".outer-container");
const eyeIcons = document.querySelectorAll(".project > .bottom > img[src*='eye']");
let lastEye;
const MESSAGES = {
    penguin: [
        "I'm grateful for my awesome friends!", 
        "When in doubt, wing it out.",
        "Keep calm and keep waddling.",
        "When I go grocery shopping, I ask the shopkeeper to put the items on my bill.",
        "My poor cousin lost his eye in an accident. People now call him pengun",
        "Everyone in my neighbourhood loves me. They say I'm an ice guy!",
        "We penguins are the life of any party. We really know how to break the ice.",
        "Move in the direction of your dreams everyday! Even if it's just a little waddle.",
        "Always be yourself. Unless you can be a penguin, then always be a penguin!",
        "https://www.youtube.com/watch?v=--t57BGKI-0",
    ],
    frog: [
        "I'm not like other software developers, I love bugs!", 
        "What do frogs do with paper? Rip-it!",
        "Why are frogs so happy? Because they eat whatever bugs them.",
        "What do you call a frog who has no legs? Unhoppy.",
        "What kind of music do frogs like best? Hip hop.",
        "What is a frog's favourite year? A leap year.",
        "You're toad-ally cool.",
        "I make a lot of animal puns, or so I've been toad.",
        "I hate traffic!",
        "https://www.youtube.com/watch?v=5nCPbPPrQxQ",
    ],
    owl: [
        "I'm working on a great project!", 
        "You're a bit of a know-it-owl.", 
        "I do a lot of things, I'm a jack of owl trades.", 
        "Keep talking, I'm owl ears.", 
        "Hoot have thought it would be this easy?",
        "Spell checkers are rubbish! I thought a TV programme featured a superb owl, turned out it was an American Football game.",
        "Why don't owls study for tests? They'd rather wing it.",
        "What did the accused owl say to the judge in court? I'm talon you, it wasn't me.",
        "Why do boy owl babies take after their dad? Like feather, like son.",
        "https://www.youtube.com/watch?v=d_FEaFgJyfA"
    ],
    octopus: [
        "What's the plural of octopus?",
        "How many tickles does it take to make an octopus laugh? Ten-tickles!",
        "How does an octopus propose to its sweetheart? 'I would like to ask for your hand, hand, hand, hand, hand, hand, hand, hand in marriage.'",
        "My favourite band is Ink Floyd!",
        "Nothing is out of my reach.",
        "The project I'm working on is life changing!",
        "My three hearts pump blue blood, that means I'm the king of the ocean!",
        "My favourite month is October!",
        "How did the octopus lose weight? He went on a low-crab diet.",
        "https://www.youtube.com/watch?v=b_o3O2shsxY"
    ]
}

function hide(element){
    element.classList.toggle("hidden");
}

function blur(element){
    element.classList.toggle("blurred");
}

hamburguerButton.addEventListener("click", toggleSidebar);

function disableSelection(){
    return false;
}
sidebar.onselectstart = disableSelection; 
main.onselectstart = disableSelection; 

function toggleSidebar(){
    sidebar.classList.toggle("show-sidebar");
    navbar.classList.toggle("shadow");
    for (let element of sidebarElements){
         element.classList.toggle("show-sidebar");
     }
    moveAndChangeHamburguer();
    hide(main);
    hide(navbarRight);
}

function moveAndChangeHamburguer(){
    hamburguerButton.classList.toggle("move-hamburguer");
    hamburguerButton.classList.toggle("change");
}


dashboard.addEventListener("mouseenter", () =>{
    dashboardIcon.classList.add("animate");
})

dashboard.addEventListener("mouseleave", () =>{
    dashboardIcon.classList.remove("animate");
})

for (let friend of friends){
    let friendName = friend["src"].split("img/")[1].slice(0, -4);
    friend.addEventListener("click", ()=>{
        let message = MESSAGES[friendName][Math.floor(Math.random()*10)];
        if(message.startsWith("https://www.youtube.com")){
            window.location.href = message;
            return;    
        }
        let image = messageDiv.firstElementChild.firstElementChild;
        image.setAttribute("src", `./img/${friendName}.jpg`);
        image.setAttribute("alt", `Cute ${friendName}`);
        messageDiv.lastElementChild.lastElementChild.innerHTML = `<p>${message}</p>`;
        blur(outerContainer);
        messageDiv.classList.toggle("show-message");
    });
}

closeButton.addEventListener("click", ()=>{
    messageDiv.classList.toggle("hinge");
    setTimeout(()=>{
        messageDiv.classList.toggle("show-message");
        messageDiv.classList.toggle("hinge");
        blur(outerContainer);
    }, 1800)
})

function makeEyesBlink(){
    let interval = selectWaitInterval();
    setTimeout(blink, interval);
    setTimeout(makeEyesBlink, interval);
}

function selectWaitInterval(){
    let interval = getRandomIntInclusive(2, 5);
    interval = Number(interval += "000");
    return interval;
}

function blink(){
    let eye;
    do {eye = chooseOneEye(); } while (eye === lastEye); 
    if (typeof(lastEye) !== "undefined") {eyeIcons[lastEye].classList.toggle("blink");}
    eyeIcons[eye].classList.toggle("blink");
    lastEye = eye;
}

function chooseOneEye(){
    let eyeChosen = getRandomIntInclusive(0, 5);
    return eyeChosen;
}

 function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
 }

makeEyesBlink();
