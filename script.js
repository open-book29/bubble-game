let timer = 60
let score = 0
let hitrn = 0

const increaseScore = () => {
    score += 10
    document.querySelector("#scoreVal").textContent = score
}

const makeBubble = () => {
    let cultter = ""
    for (let i = 0; i < 207; i++) {
        let rn = Math.floor(Math.random() * 10)
        cultter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#p-btm").innerHTML = cultter
}

const runTimer = () => {
    let timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--
            document.querySelector("#timerInt").textContent = timer
        }
        else {
            clearInterval(timerInterval)
            document.querySelector("#p-btm").innerHTML = `<div id="scoreModal" class="shadow-lg">
            <div id="top">Game Over</div>
            <div id="btm">
                <div id="scoreTable">
                    <h2>Score: <span id="scoreVal">${score}</span></h2>
                </div>
                <div id="gameBtn">
                    <button onclick="newGame()" id="btn">New Game</button>
                </div>
            </div>
        </div>`
            // document.getElementById("scoreModal").style.display = "block"
        }
    }, 1000)
}

const getNewHit = () => {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitVal").textContent = hitrn
}

const newGame = () => {
    document.getElementById("scoreModal").style.display = "none"
    timer = 60
    runTimer()
    makeBubble()
}

document.querySelector("#p-btm").addEventListener("click", function (e) {
    let clickedNumber = Number(e.target.textContent)
    if (clickedNumber == hitrn) {
        increaseScore()
        makeBubble();
        getNewHit();
    }
})

const startGame = () => {
    runTimer()
    makeBubble();
    getNewHit();
}

