let homeScore = 0
let guestScore = 0

const scoreElement1 = document.getElementById("home")
scoreElement1.innerText = homeScore

const scoreElement2 = document.getElementById("guest")
scoreElement2.innerText = guestScore

function addPoint1A() {
    homeScore += 1;
    scoreElement1.innerText = homeScore
}

function addPoint1B() {
    guestScore += 1;
    scoreElement2.innerText = guestScore
}

function addPoint2A() {
    homeScore += 2;
    scoreElement1.innerText = homeScore
}

function addPoint2B() {
    guestScore += 2;
    scoreElement2.innerText = guestScore
}

function addPoint3A() {
    homeScore += 3;
    scoreElement1.innerText = homeScore
}

function addPoint3B() {
    guestScore += 3;
    scoreElement2.innerText = guestScore
}
