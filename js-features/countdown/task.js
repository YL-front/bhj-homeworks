const startValue = document.getElementById('timer'); 

const runTimer = function () {
    startValue.textContent--;

    if(startValue.textContent < 0) {
        clearInterval(id);
        alert('Вы победили в конкурсе!');   
    }
}

let id = setInterval(runTimer, 1000);

