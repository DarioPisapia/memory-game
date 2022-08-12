const allImgs = ['apollo11.jpeg', 'crewDragon.jpg', 'curiosityMars.jpeg', 'falconHeavyLanding.jpeg',
'iss.jpeg', 'sagittariusA.jpeg', 'saturnV.jpeg', 'spaceShuttle.jpeg',
'starshipFull.jpg', 'webbTelescope.jpg', 'apollo11.jpeg', 'crewDragon.jpg', 'curiosityMars.jpeg', 'falconHeavyLanding.jpeg',
'iss.jpeg', 'sagittariusA.jpeg', 'saturnV.jpeg', 'spaceShuttle.jpeg',
'starshipFull.jpg', 'webbTelescope.jpg'
]

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

      
        /* card.setAttribute('onClick', `gameLogic(${ids}, \'${element}\')`) */
        
        //append it to DOM
        front.appendChild(frontImg);
        back.appendChild(backImg);
        flipCard.appendChild(front);
        flipCard.appendChild(back);
        card.appendChild(flipCard);
        document.getElementById('container').appendChild(card)
        evlistener(ids, element)
    });
}

const evlistener = (ids, element) => {
        document.getElementById(ids).addEventListener('click', () => {
            gameLogic(ids, element)
        })
    }

export {shuffler, cardGenerator}
/* module.exports = {allImgs, shuffler, cardGenerator} */