
const allImgs = ['apollo11.jpeg', 'crewDragon.jpg', 'curiosityMars.jpeg', 'falconHeavyLanding.jpeg',
'iss.jpeg', 'sagittariusA.jpeg', 'saturnV.jpeg', 'spaceShuttle.jpeg',
'starshipFull.jpg', 'webbTelescope.jpg', 'apollo11.jpeg', 'crewDragon.jpg', 'curiosityMars.jpeg', 'falconHeavyLanding.jpeg',
'iss.jpeg', 'sagittariusA.jpeg', 'saturnV.jpeg', 'spaceShuttle.jpeg',
'starshipFull.jpg', 'webbTelescope.jpg'
]

var points = 0 
var moves = 0

var img1 = ''
var id1 = ''
var img2 = ''
var id2 = ''
var clickCount = 0

//da rimuovere da qui -> va in gameLocig
const resultCalculator = () => {
    if (moves <= 20){
        return '3stars.png'
    }
    if (20 < moves < 30){
        return '2stars.png'
    }
    else {
        return '1star.png'
    }
}

const shuffler = () => {
    const imgArr = []
    const indexUsed = []
    while (imgArr.length < allImgs.length) {
        var index = Math.floor(Math.random() * allImgs.length)
        if (!(indexUsed.includes(index))){
            imgArr.push(allImgs[index])
            indexUsed.push(index)
        }
    }
    return imgArr
}

const cardGenerator = (imgArr) => {
    var ids = 0
    imgArr.forEach(element => {
    ids += 1
    //creating all the needed div and img
    var card = document.createElement("div");
    var flipCard = document.createElement("div");
    var front = document.createElement("div");
    var back = document.createElement("div");
    var frontImg = document.createElement("img");
    var backImg = document.createElement("img");

    //assign all the attributes
    card.className = 'card';
    card.id = `${ids}`
    flipCard.className = 'flipCard';
    front.className = 'front';
    back.className = 'back';
    frontImg.src = `../img/${element}`;
    frontImg.id = `${element}`;
    backImg.src = '../img/back.jpeg'

    card.setAttribute('onClick', `gameLogic(${ids}, \'${element}\')`)
    //append it to DOM
    front.appendChild(frontImg);
    back.appendChild(backImg);
    flipCard.appendChild(front);
    flipCard.appendChild(back);
    card.appendChild(flipCard);
    document.getElementById('container').appendChild(card)
    });
}


//da rimuovere da qui, va in app.js
cardGenerator(shuffler(allImgs))

//domevents
const gameLogic = (ids, imageId) => { 
    if (clickCount < 2){
        clickCount += 1;
        flip(ids);
        document.getElementById(ids).removeAttribute('onClick');
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

//domevents
const flip = (ids) => {
document.getElementById(ids).classList.toggle('flip')
}

//da rimuovere da qui -> va in gameLogic
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

//potrebbe andare in app.js
const showResult = () => {
const stars = resultCalculator()
document.getElementById('overlay').style.display = 'block'
document.getElementById('scoreImg').src = `./img/${stars}` 
}


//spostare in domEvents
const clearAll = () => {
    const parent = document.getElementById('container')
    var child = parent.lastElementChild
    while (child) {
        parent.removeChild(child)
        child = parent.lastElementChild
    }
}

//potrebbe andare in app.js
const reset = () => {
    clearAll()
    cardGenerator(shuffler(allImgs))
    document.getElementById('overlay').style.display = 'none'
    clickCount = 0
    id1 = ''
    img1 = ''
    id2 = ''
    img2 = '' 
    points = 0
    moves = 0
}

//spostare in domevents
document.getElementById('restartMain').addEventListener('click', () => {
reset()
})
document.getElementById('restartGame').addEventListener('click', () => {
reset()
})

//spostare in domEvents
const reFlip = () => {
    flip(id1)
    flip(id2)
    document.getElementById(id2).setAttribute('onClick', `gameLogic(${id2}, \'${img2}\')`)
    document.getElementById(id1).setAttribute('onClick', `gameLogic(${id1}, \'${img1}\')`)
}




