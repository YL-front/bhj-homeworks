let cookie = document.getElementById('cookie');

let clickCounter = document.getElementById('clicker__counter');

//clickCounter = 0;

function changeImgSize() {
    if(clickCounter.textContent%2) {
        cookie.width = 150;
    }
    else {
        cookie.width = 200;
    }
}

cookie.onclick = function() {
    clickCounter.textContent++;
    changeImgSize();
}