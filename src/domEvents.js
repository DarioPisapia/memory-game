import { toZero, resultCalculator } from "./gameLogic.js"
import { cardGenerator, shuffler } from "./cardGenerator.js"

var seconds = 0
var minutes = 0

const isFlipped = (ids) => {
    return document.getElementById(ids).className === 'card'
}

const flip = (ids) => {
    document.getElementById(ids).classList.toggle('flip')
}

const clearAll = () => {
    const parent = document.getElementById('container')
    var child = parent.lastElementChild
    while (child) {
        parent.removeChild(child)
        child = parent.lastElementChild
    }
}

const reset = () => {
    clearAll()
    cardGenerator(shuffler())
    document.getElementById('overlay').style.display = 'none'
    document.getElementById('minutes').textContent = `00`
    document.getElementById('seconds').textContent = `00`
    toZero()
    seconds = 0
    minutes = 0
    clearInterval(stopInterval)
    startTimer()
}

const showResult = () => {
    const stars = resultCalculator()
    document.getElementById('overlay').style.display = 'block'
    document.getElementById('scoreImg').src = `./img/${stars}` 
    var min = document.getElementById('minutes').textContent;
    var sec = document.getElementById('seconds').textContent
    document.getElementById('endTime').textContent = `${min} : ${sec}`
}



const updateTimer = () => {
    if (seconds < 60){
        if (seconds < 10){
            document.getElementById('seconds').textContent = `0${seconds}`
        }else{
            document.getElementById('seconds').textContent = seconds  
        }
        
    } else {
        minutes += 1
        seconds = 0
        if (minutes < 10){
            document.getElementById('minutes').textContent = `0${minutes}`
            document.getElementById('seconds').textContent = `0${seconds}`
        }
        document.getElementById('minutes').textContent = `0${minutes}`
        document.getElementById('seconds').textContent = `0${seconds}`
    }
    seconds ++
}

var stopInterval;
const startTimer = () => {
    stopInterval = setInterval(updateTimer, 1000)
}

startTimer()


export {reset, isFlipped, clearAll, flip, showResult, stopInterval, startTimer}

/* var img1 = ''
var id1 = ''
var img2 = ''
var id2 = ''
var clickCount = 0 */

//da spostare
/* const gameLogic = (ids, imageId) => { 
    if (isFlipped(ids)){
        if (clickCount < 2){
            clickCount += 1;
            flip(ids);
        if (clickCount === 2){
            img2 = imageId
            id2 = ids
            setTimeout(check, 700)
        }    
        if (clickCount === 1){
            id1 = ids
            img1 = imageId
            } 
        }
    }     
} */

/* const reFlip = () => {
    flip(id1)
    flip(id2)
} */

/* const toZero = () => {
    clickCount = 0
    id1 = ''
    img1 = ''
    id2 = ''
    img2 = '' 
} */