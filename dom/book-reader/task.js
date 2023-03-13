let sizeArray = Array.from(document.querySelectorAll('.font-size'));
let reader = document.querySelector('.book');

sizeArray.forEach((e, i) => {
  e.addEventListener('click', (event) => {
    showSize(i);
    event.preventDefault();
   })
});

function showSize(i) {
  sizeArray.forEach((e, index) => {
    if (i == index) {
      e.classList.add('font-size_active'); 
    } else {
      e.classList.remove('font-size_active');
    }
  })

  if (i == 0) {
    reader.classList.add('book_fs-small');
  } else if (i == 2) {
    reader.classList.remove('book_fs-small')
    reader.classList.add('book_fs-big')
  } else {
    reader.classList.remove('book_fs-small','book_fs-big' )
  }
}