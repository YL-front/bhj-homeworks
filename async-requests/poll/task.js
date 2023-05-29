const title = document.querySelector('.poll__title');
const answerButtons = document.querySelector('.poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    title.innerHTML = JSON.parse(xhr.responseText).data.title
      
    let itemsArray =  JSON.parse(xhr.responseText).data.answers
    itemsArray.forEach(e => {
      let btn = document.createElement('button');
      btn.className = 'poll__answer';   
      btn.innerHTML = e;
      answerButtons.append(btn)  
      btn.onclick = function() {
        alert('Спасибо, ваш голос засчитан!');
         };      
      });
   };
};