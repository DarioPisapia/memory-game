import { gameLogic } from "./gameLogic.js"

const allImgs = ['apollo11.jpeg', 'crewDragon.jpg', 'curiosityMars.jpeg', 'falconHeavyLanding.jpeg',
'iss.jpeg', 'sagittariusA.jpeg', 'saturnV.jpeg', 'spaceShuttle.jpeg',
'starshipFull.jpg', 'webbTelescope.jpg', 'apollo11.jpeg', 'crewDragon.jpg', 'curiosityMars.jpeg', 'falconHeavyLanding.jpeg',
'iss.jpeg', 'sagittariusA.jpeg', 'saturnV.jpeg', 'spaceShuttle.jpeg',
'starshipFull.jpg', 'webbTelescope.jpg'
]

//shuffle the array with images names
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
    const card = document.createElement("div");
    const flipCard = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");
    const frontImg = document.createElement("img");
    const backImg = document.createElement("img");

    //assign all the attributes
    card.className = 'card';
    card.setAttribute('cypress-tag', `${element}` )
    card.id = `${ids}`
    flipCard.className = 'flipCard';
    front.className = 'front';
    back.className = 'back';
    frontImg.src = `../img/${element}`;
    frontImg.id = `${element}`;
    backImg.src = '../img/back.jpeg'

    //append it to DOM
    front.appendChild(frontImg);
    back.appendChild(backImg);
    flipCard.appendChild(front);
    flipCard.appendChild(back);
    card.appendChild(flipCard);

    
    /* const cardHTML = `
        <div class="miaclasse">
            <img src="${mioSrc}"/>
        </div>
    ` */

    document.getElementById('container').appendChild(card)

    
    onClick(ids, element)

    });
}

const onClick = (cardId, imgName) => {
    document.getElementById(cardId).addEventListener('click', () => {
        gameLogic(cardId, imgName)
    })
}

export {cardGenerator, shuffler}