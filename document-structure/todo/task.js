let taskInput = document.querySelector('.tasks__input');
let taskList = document.querySelector('.tasks__list');
let taskForm = document.getElementById('tasks__form');
let tasks = document.querySelectorAll('.task');

taskForm.onsubmit = function() {
  let text = taskInput.value.trim();

  if (text) {
    taskList.insertAdjacentHTML("beforeend", `<div class="task">
    <div class="task__title">${text}</div>
    <a href="#" class="task__remove">
    &times;
    </a>
    </div>`)
      let remove = document.querySelectorAll('.task__remove');
      remove[remove.length -1].addEventListener('click', function(){
        this.parentElement.remove();
      })
         
   }
    taskInput.value = '';
    return false;
};