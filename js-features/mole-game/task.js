let holes = Array.from(document.querySelectorAll('.hole'));
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for (let i = 0; i < holes.length; i++) {
    holes[i].onclick = () => {

        if (holes[i].className.includes('hole_has-mole')) {
            dead.textContent++;
        }
        else {
            lost.textContent++;
        }

        if (dead.textContent >= 10) {
            alert('Победа!');
            dead.textContent = 0;
            lost.textContent = 0;
        }

        if (lost.textContent >= 5) {
            alert('Вы проиграли!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}