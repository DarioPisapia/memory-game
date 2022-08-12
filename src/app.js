import {cardGenerator, shuffler} from './cardGenerator.js'
import {reset, stopInterval, startTimer} from './domEvents.js'

cardGenerator(shuffler())

document.getElementById('restartMain').addEventListener('click', () => {
    reset()
})
document.getElementById('restartGame').addEventListener('click', () => {
    reset()
})

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(stopInterval)
})

document.getElementById('go').addEventListener('click', () => {
    startTimer()
})

