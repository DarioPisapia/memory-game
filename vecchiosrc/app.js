/* const {shuffler, cardGenerator} = require('./cardGenerator') 
const {gameLogic, flip, clearAll, reFlip} = require('./domEvents.js')
const {resultCalculator, check} = require('./notDomFunctions') */
import {cardGenerator, shuffler} from './cardGenerator.js'

var points = 0 
var moves = 0
var img1 = ''
var id1 = ''
var img2 = ''
var id2 = ''
var clickCount = 0

cardGenerator(shuffler())

const showResult = () => {
    const stars = resultCalculator()
    document.getElementById('overlay').style.display = 'block'
    document.getElementById('scoreImg').src = `./img/${stars}` 
}

const reset = () => {
    clearAll()
    cardGenerator(shuffler())
    document.getElementById('overlay').style.display = 'none'
    clickCount = 0
    id1 = ''
    img1 = ''
    id2 = ''
    img2 = '' 
    points = 0
    moves = 0
}

document.getElementById('restartMain').addEventListener('click', () => {
    reset()
})
document.getElementById('restartGame').addEventListener('click', () => {
    reset()
})
