import { toZero, resultCalculator, moves} from "./gameLogic.js"
import { cardGenerator, shuffler } from "./cardGenerator.js"
import { resetTimer } from "./timer.js"

//check if a card is flipped
const isFlipped = (ids) => {
    return document.getElementById(ids).className === 'card'
}

//flip the cards
const flip = (ids) => {
    document.getElementById(ids).classList.toggle('flip')
}

//reset and restart the game
const reset = () => {
    document.getElementById('container').innerHTML = "";
    cardGenerator(shuffler())
    document.getElementById('overlay').style.display = 'none'
    document.getElementById('minutes').textContent = `00`
    document.getElementById('seconds').textContent = `00`
    toZero()
    resetTimer()
}

//show the result overlay
const showResult = () => {
    const stars = resultCalculator(moves)
    document.getElementById('overlay').style.display = 'block'
    document.getElementById('scoreImg').src = `./img/${stars}` 
    var min = document.getElementById('minutes').textContent;
    var sec = document.getElementById('seconds').textContent
    document.getElementById('endTime').textContent = `${min} : ${sec}`
}

export {reset, isFlipped, flip, showResult}
