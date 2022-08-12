import {isFlipped, flip, showResult, stopInterval} from './domEvents.js'

var img1 = ''
var id1 = ''
var img2 = ''
var id2 = ''
var clickCount = 0

var moves = 0
var points = 0 

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

const resultCalculator = (moves) => {
    console.log(moves, 'ciao')
    if (moves <= 20){
        return '3stars.png'
    }
    if (20 < moves && moves < 30){
        return '2stars.png'
    }
    else {
        return '1star.png'
    }
}

const check = () => {
    moves += 1
    if (img2 === img1) {
        points += 1 
        if(points === 2){
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

const toZero = () => {
    return clickCount = 0, id1 = '', img1 = '', id2 = '', img2 = '' 
}

export {check, resultCalculator, gameLogic, toZero, moves}