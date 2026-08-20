function random(length) {
    return Math.floor(Math.random() * length)
}

function randomColor() {
    return `rgb(${random(256)}, ${random(256)}, ${random(256)})`
}

// show color code in the header




// select elements from html

const displayColorCode = document.getElementById('displayColorCode')
const boxes = document.getElementsByClassName('box')
const newGame = document.getElementById("newGame")

// main logic


function startGame() {
    const colorCode = randomColor() 

    const randomBoxNumber = random(6)

    displayColorCode.innerText = colorCode

    for (let box of boxes) {
        box.style.backgroundColor = randomColor()
    }

    boxes[randomBoxNumber].style.backgroundColor = colorCode

    return [
        colorCode,
        randomBoxNumber
    ]
}

let [colorCode, randomBoxNumber] = startGame()

console.log(colorCode)
console.log(randomBoxNumber)


for (let box of boxes) {
    box.onclick = () => {
        if (box.style.backgroundColor == colorCode) {
            for (let subBox of boxes) {
                subBox.classList.remove('fadeOut')
                subBox.style.backgroundColor = colorCode
            }
        } else {
            box.classList.add('fadeOut')
        }
    }
}




newGame.onclick = () => { 
    [colorCode, randomBoxNumber] = startGame()
}


