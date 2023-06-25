let pScore = 0;
let cScore = 0;
let rWin = '';

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) { rWin = 'DRAW' }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        pScore++
        rWin = 'PLAYER'
        console.log(pScore)
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        cScore++
        rWin = 'COMP'
        console.log(cScore)
    }
}

window.onload=function(){
    const pPoints = document.getElementById('playerPoints')
    const cPoints = document.getElementById('computerPoints')
    const rBtn = document.getElementById('btnRock')
    const pBtn = document.getElementById('btnPaper')
    const sBtn = document.getElementById('btnScissors')
    const scoreInfo = document.getElementById('result')
    const winLose = document.getElementById('wl')
    const pScores = document.getElementById('pscores')
    const cScores = document.getElementById('cscores')

    rBtn.addEventListener('click', () => handleClick('ROCK'))
    pBtn.addEventListener('click', () => handleClick('PAPER'))
    sBtn.addEventListener('click', () => handleClick('SCISSORS'))


function handleClick(playerSelection) {

    if (pScore === 5){
        pScores.style.visibility = "hidden";
        cScores.style.visibility = "hidden";
        winLose.textContent = `WINNER`
    }

    if (cScore === 5){
        pScores.style.visibility = "hidden";
        cScores.style.visibility = "hidden";
        winLose.textContent = `LOSER`
    }

    else {
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    updateScore()
    }
}

function updateScore(){
    if (rWin === 'tie') {
        scoreInfo.textContent = "DRAW"
      } else if (rWin === 'PLAYER') {
        scoreInfo.textContent = 'WIN'
      } else if (rWin === 'COMP') {
        scoreInfo.textContent = 'LOSE'
      }

    pPoints.textContent = `${pScore}`
    cPoints.textContent = `${cScore}`
}
}