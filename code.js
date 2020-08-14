const rockButton = document.getElementById('rbutton');
const paperButton = document.getElementById('pbutton');
const scissorsButton = document.getElementById('sbutton');
const resultText = document.getElementById('result');
const userScore_s = document.getElementById('user-score');
const compScore_s = document.getElementById('comp-score');
const scores = document.getElementById('scores');
let userScore = 0;
let compScore = 0;

function whoIsWinning() {
    console.log(userScore, compScore);
    if (userScore > compScore) {
        scores.style.color = "#26ff63";
    } else if (compScore > userScore) {
        scores.style.color = "#ff4242";
    } else {
        scores.style.color = "#ffffff";
    }
}

function convertChoice(choice){
    if(choice==='r'){
        return "Rock";
    }
    if(choice==='s'){
        return "Scissors";
    }
    if(choice==='p'){
        return "Paper";
    }
}

function clicked(userChoice) {
    var ch = ['r', 'p', 's'];
    var compChoice = ch[Math.floor(Math.random() * 3)];

    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            userScore++;
            userScore_s.innerHTML = userScore;
            whoIsWinning();
            resultText.innerHTML = `${convertChoice(userChoice)} beats ${convertChoice(compChoice)}. You won!`;
            break;
        case "rp":
        case "ps":
        case "sr":
            compScore++;
            compScore_s.innerHTML = compScore;
            whoIsWinning();
            resultText.innerHTML = `${convertChoice(userChoice)} was beaten by ${convertChoice(compChoice)}. You Lost!`;;
            break;
        case "rr":
        case "pp":
        case "ss":
            resultText.innerHTML = "It's a Draw!";
            break;
    }
}

function main() {
    rockButton.addEventListener('click', () => clicked('r'));
    paperButton.addEventListener('click', () => clicked('p'));
    scissorsButton.addEventListener('click', () => clicked('s'));
}

main();
