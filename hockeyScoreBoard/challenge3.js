let score1 = 0 
let score2 = 0
let period = 1

function addPT1() {
    score1++
    document.querySelector("#score1").innerHTML = score1
}

function minusPT1(){
    score1--
    if (score1 < 0) {
        score1 = 0
    } 
    document.querySelector("#score1").innerHTML = score1
}

function addPT2() {
    score2++
    document.querySelector("#score2").innerHTML = score2
}

function minusPT2(){
    score2--
    if (score2 < 0) {
        score2 = 0
    }
    document.querySelector("#score2").innerHTML = score2
}

function periodPlus () {
    period++
    if (period > 3) {
        period = 3
    }
    document.getElementById("period").innerHTML = period
}

function periodMinus () {
    period--
    if (period < 1) {
        period = 1
    }
    document.getElementById("period").innerHTML = period
}

function reset () {
    document.querySelector("#period").innerHTML = "1"
    document.querySelector("#score1").innerHTML = "0"
    document.querySelector("#score2").innerHTML = "0"
    document.querySelector(".box-penalty1").innerHTML = ""
    document.querySelector(".box-penalty2").innerHTML = ""
}

function addPenalty1 (){
    var addpenaltylist1 = document.getElementById("inputname").value
    document.querySelector(".box-penalty1").innerHTML += addpenaltylist1 + "<br>" 
}

function addPenalty2 () {
    var addpenaltylist1 = document.getElementById("inputname2").value
    document.querySelector(".box-penalty2").innerHTML += addpenaltylist1 + "<br>" 
}

function resetPenalty1 (){
    document.querySelector(".box-penalty1").innerHTML = ""
}

function resetPenalty () {
    document.querySelector(".box-penalty2").innerHTML = ""
}

const startingMinutes = 10;
let time = startingMinutes * 60; 

// const countdownEl = document.getElementById('countdown'); // grabs HTML element for timer

// setInterval(updateCountdown, 1000);

// function updateCountdown(){
//     const minutes = Math.floor(time/60);
//     let seconds = time % 60;

//     seconds = seconds < 10 ? 0 + seconds : seconds;

//     countdownEl.innerHTML = `${minutes}: ${seconds}`
//     time--;
// }