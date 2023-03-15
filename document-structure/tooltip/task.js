let selectLink = document.querySelectorAll('.has-tooltip');
tooltip = document.createElement('div');
tooltip.className = 'tooltip';

selectLink.forEach( e => {
  let coordinates = e.getBoundingClientRect();
  let left = coordinates.left;
  let top = coordinates.top - tooltip.offsetHeight + 20;
  e.addEventListener('click', stopDefAction, false);

  function stopDefAction(event) {

    if(tooltip.innerHTML != e.title) {
        tooltip.innerHTML = e.title
        tooltip.classList.add('tooltip_active')
    } else {
        tooltip.classList.remove('tooltip_active')
        tooltip.innerHTML = '';
    }
     
    event.preventDefault();
    e.insertAdjacentElement("beforebegin", tooltip)
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    return tooltip;  
 }   
});