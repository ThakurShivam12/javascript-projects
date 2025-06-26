let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#sbmt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let numGuess = 0
let prevGuess = []

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number!')
    } else if (guess < 1) {
        alert('Please enter a number more than 1!')
    } else if (guess > 100) {
        alert('Please enter a number less than or equal to 100!')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game over! Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You guessed it right`)
        endGame()
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO high`)
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}