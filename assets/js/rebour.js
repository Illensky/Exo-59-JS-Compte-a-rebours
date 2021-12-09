let seconds = 60;
let timer = document.getElementById('timer')
let interval = null


function start() {
    interval = setInterval(() => {
        if (seconds > 0) {
            seconds--;
            timer.innerHTML = seconds + " secondes restantes";
            start()
        }
        clearInterval(interval);
    }, 1000);
}


start()