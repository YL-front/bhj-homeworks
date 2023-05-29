const signIn = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signinBtn = document.querySelector('.btn');
const userId = document.getElementById('user_id');
const signoutBtn = document.getElementById('signout__btn');

signinBtn.addEventListener('click', sendForm);

function sendForm(e) {

    e.preventDefault();

    const form = document.getElementById('signin__form');
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.addEventListener('load', showData);
    xhr.send(formData);
    xhr.responseType = 'json';

    function showData() {
        const response = xhr.response;
            if (response.success) {
                localStorage.userId = response.user_id;
                signIn.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = response.user_id;           
        }
        else {
            alert('Неверный логин/пароль');
        }
    }
}

signinForm.reset();


const storageId = localStorage.getItem('userId');

if (storageId) {
    signIn.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.innerText = localStorage.userId;
}


signoutBtn.addEventListener('click', (e) => {
    e.preventDefault();

    delete localStorage.userId;
    welcome.classList.remove('welcome_active'); 
    signIn.classList.add('signin_active');  
});