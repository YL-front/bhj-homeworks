let div = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
  div.forEach((e) => {
    const height = window.innerHeight;
    const top = e.getBoundingClientRect().top;
    if (top < height) {
      e.classList.add('reveal_active');
      } else {
        e.classList.remove('reveal_active');
      }
   })
});