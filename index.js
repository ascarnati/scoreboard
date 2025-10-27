let homeScore = 0
let guestScore = 0

document.getElementById("home-score").innerHTML = homeScore;
document.getElementById("guest-score").innerHTML = guestScore;

function updateScoreHome(points) {
    homeScore += points
    document.getElementById("home-score").textContent = homeScore;
    console.log(homeScore)
}

function updateScoreGuest(points) {
    guestScore += points
    document.getElementById("guest-score").textContent = guestScore;
    console.log(guestScore)
}

function newGame() {
    document.getElementById("guest-score").textContent = 0;
    document.getElementById("home-score").textContent = 0;
}

