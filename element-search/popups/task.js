let showPopup = document.querySelector('#modal_main');

showPopup.classList.toggle('modal_active');


// close popup
let closePopup = document.querySelector('.modal__close');

closePopup.onclick = function () {
    showPopup.classList.toggle('modal_active');
}


// show success
let showSuccess = document.querySelector('.show-success');

let show = document.querySelector('#modal_success');

showSuccess.onclick = function () {
    showPopup.classList.toggle('modal_active');
    show.classList.toggle('modal_active');
}

// close success
let closeSuccess = document.querySelectorAll('.modal__close'); 

closeSuccess[2].onclick = function () {
    //showPopup.classList.toggle('modal_active');
    show.classList.toggle('modal_active');
}

