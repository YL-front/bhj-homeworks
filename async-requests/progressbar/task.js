const progress = document.getElementById('progress');
const send = document.getElementById('send');
const form = document.getElementById('form');
const selectBtn = document.querySelector('.input__wrapper-button');

selectBtn.addEventListener('click', () => {
  progress.setAttribute('value', 0);
});

send.addEventListener('click', (e) => {
  e.preventDefault();

  const file = document.querySelector('.input__wrapper-desc');

  if (file.textContent) {
    upload();
  }
    return false;
});

const upload = function () {
  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.upload.onprogress = (evt) => {
    progress.setAttribute('value', evt.loaded/evt.total);
  };
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
  };