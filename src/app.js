import {cardGenerator, shuffler} from './cardGenerator.js'
import {reset} from './domEvents.js'
import {startTimer, stopInterval} from './timer.js'

//generates the initial cards and starts timer
cardGenerator(shuffler())
startTimer()

//add event listener to the restart buttons
document.getElementById('restartMain').addEventListener('click', () => {
    reset()
})
document.getElementById('restartGame').addEventListener('click', () => {
    reset()
})



