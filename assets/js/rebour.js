let seconds = 60;
let timer = document.getElementById('timer')
let interval = null


function start() {
    interval = setInterval(sec, 1000);
}

function finish() {
    clearInterval(interval);
    timer.innerHTML = "TERMINE!";
}

function sec() {
    seconds--;
    if(seconds === 0) finish();
    else {
        timer.innerHTML = seconds + " secondes restantes";
    }
}

start()