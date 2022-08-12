const gameLogic = (ids, imageId) => { 
    if (clickCount < 2){
        clickCount += 1;
        flip(ids);
        document.getElementById(ids).removeEventListener;
        if (clickCount === 2){
            img2 = imageId
            id2 = ids
            setTimeout(check, 700)
            };     
        if (clickCount === 1){
            id1 = ids
            img1 = imageId
        } 
    }  
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

/* const reset = () => {
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
} */
/* document.getElementById('restartMain').addEventListener('click', () => {
    reset()
})
document.getElementById('restartGame').addEventListener('click', () => {
    reset()
}) */

const reFlip = () => {
    flip(id1)
    flip(id2)
    evlistener(id1, img1)
    evlistener(id2, img2)
}

module.exports = {gameLogic, flip, clearAll, reFlip}