const resultCalculator = () => {
    if (moves <= 15){
        return '3stars.png'
    }
    if (15 < moves < 25){
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
        if(points === 10){
            showResult()
        }
    }
    else {
        reFlip()
    }
    clickCount = 0
    id1 = ''
    img1 = ''
    id2 = ''
    img2 = '' 
}

module.exports = {resultCalculator, check}