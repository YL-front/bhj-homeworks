const startValue = document.getElementById('timer'); 

const runTimer = function () {
    startValue.textContent--;

    if(startValue.textContent < 0) {
        clearInterval();
        alert('Вы победили в конкурсе!');   
    }
}

setInterval(runTimer, 1000);

