import {cardGenerator, shuffler} from './cardGenerator.js'
import {reset} from './domEvents.js'
import {startTimer, stopInterval} from './timer.js'

//generates the initial cards and start timer
cardGenerator(shuffler())
startTimer()

//add event listener to the restart buttons
document.getElementById('restartMain').addEventListener('click', () => {
    reset()
})
document.getElementById('restartGame').addEventListener('click', () => {
    reset()
})

//add event listener to timer buttons
document.getElementById('stop').addEventListener('click', () => {
    clearInterval(stopInterval)
})
document.getElementById('go').addEventListener('click', () => {
    startTimer()
})

