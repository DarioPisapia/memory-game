import {cardGenerator, shuffler} from './cardGenerator.js'
import {reset} from './domEvents.js'
import {startTimer} from './timer.js'

//generates the initial cards
cardGenerator(shuffler())

//add event listener to the restart buttons
document.getElementById('startGame').addEventListener('click', () => {
    startTimer()
    document.getElementById('startingPage').style.display = 'none'
})

document.getElementById('restartMain').addEventListener('click', () => {
    reset()
})
document.getElementById('restartGame').addEventListener('click', () => {
    reset()
})


