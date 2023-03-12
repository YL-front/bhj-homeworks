let checkboxArray = Array.from(document.querySelectorAll('.interest__check'));
let itemsArray = Array.from(document.querySelectorAll('.interest_active'));



checkboxArray.forEach((e)=> {
  e.addEventListener('click', ()=>{
    if (e.closest('.interests_active') == null) {          
      e.parentElement.nextElementSibling.querySelectorAll('input').forEach(elem => {
        if (e.checked) {
           elem.checked = true;
           } else {
             elem.checked = false;
           }
        })
      }
   })  
});