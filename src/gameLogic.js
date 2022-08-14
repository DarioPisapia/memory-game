import {isFlipped, flip, showResult} from './domEvents.js'
import {stopInterval} from './timer.js'

var img1 = ''
var id1 = ''
var img2 = ''
var id2 = ''
var clickCount = 0

var moves = 0
var points = 0 

//check the state of the game
const gameLogic = (ids, imageId) => { 
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
}

//check if we find a couple of equal cards and if we find all of them show us the result
const check = () => {
    moves += 1
    if (img2 === img1) {
        points += 1 
        if(points === 10){
            showResult()
            clearInterval(stopInterval)
            points = 0
            moves = 0
        }
    }
    else {
        flip(id1)
        flip(id2)
    }
    toZero()
}

const resultCalculator = (moves) => {
    if (moves <= 20){
        return 3
    }
    if (20 < moves && moves < 30){
        return 2
    }
    else {
        return 1
    }
}


//set the game to initial state
const toZero = () => {
    return clickCount = 0, id1 = '', img1 = '', id2 = '', img2 = '' 
}

export {check, resultCalculator, gameLogic, toZero, moves}