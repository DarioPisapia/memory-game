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
    document.getElementById('starsContainer').innerHTML = ''
    toZero()
    resetTimer()
}

//show the result overlay
const showResult = () => {
    document.getElementById('overlay').style.display = 'block'
    stars(resultCalculator(moves))
    var min = document.getElementById('minutes').textContent;
    var sec = document.getElementById('seconds').textContent
    document.getElementById('endTime').textContent = `${min} : ${sec}`
}


//shows the right amount of stars
const stars = (stars) => {
    for (let i = 0; i < stars; i++){
        const container = document.getElementById('starsContainer');
        var child = document.createElement('img')
        child.src = '../img/star.png'
        child.className = 'star'
        container.appendChild(child)
    }
}

export {reset, isFlipped, flip, showResult}
