const textarea = document.getElementById('editor');
const clearBtn = document.getElementById('clear');

textarea.addEventListener('input', () => {
  localStorage.setItem('text', textarea.value);
});

textarea.value = localStorage.getItem('text');

clearBtn.addEventListener('click', () => {
    textarea.value = '';
    localStorage.clear();
});