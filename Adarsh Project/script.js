let yourScore = 0;
let compScore = 0;
let yourOppotion;
let compOppotion;
const rButton = document.querySelector("#rock");
const pButton = document.querySelector("#paper");
const sButton = document.querySelector("#scissor");
const msg = document.querySelector(".message")

const Opption = () => {
    let a = 1;
    let b = 3;
    let Anmol = Math.round(a + (b - a) * Math.random())
    if (Anmol == 1) {
        compOppotion = "scissor";
    }
    else if (Anmol == 2) {
        compOppotion = "paper";
    }
    else {
        compOppotion = "rock";
    }
}

const Rock = () => {
    Opption()
    yourOppotion = "rock";

    if (compOppotion == yourOppotion) {
        msg.textContent = "it's a Draw";
    } else {
        if (compOppotion == "paper") {
            msg.innerText = "Rock Beats Scissor, You win!";
            yourScore++
            You.innerText = yourScore;
        }
        else {
            msg.innerText = "Papper Beats Rock, You lose!";
            compScore++
            computer.innerText = compScore;
        }

    }
}

const Paper = () => {
    Opption()
    yourOppotion = "paper";

    if (compOppotion == yourOppotion) {
        msg.textContent = "it's a Draw";
    } else {
        if (compOppotion == "rock") {
            msg.innerText = "Papper Beats Rock, You win!";
            yourScore++
            You.innerText = yourScore;
        }
        else {
            msg.innerText = "Scissor Beats Papper, You lose!";
            compScore++
            computer.innerText = compScore;
        }

    }
}

const Scissor = () => {
    Opption()
    yourOppotion = "scissor";

    if (compOppotion == yourOppotion) {
        msg.textContent = "it's a Draw";
    } else {
        if (compOppotion == "paper") {
            msg.innerText = "Scissor Beats Papper, You win!";
            yourScore++
            You.innerText = yourScore;
        }
        else {
            msg.innerText = "Rock Beats Scissor, You lose!";
            compScore++
            computer.innerText = compScore;
        }
    }
}

rButton.addEventListener("click", Rock)
pButton.addEventListener("click", Paper)
sButton.addEventListener("click", Scissor)
