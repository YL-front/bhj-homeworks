const tabs = Array.from(document.querySelectorAll('.tab'));

tabs.forEach((e, i)=> {

    e.addEventListener('click',()=>{
        tabs.forEach((tab)=>{
        tab.classList.remove('tab_active')
        })
        e.classList.add('tab_active');
          
        tabContents = Array.from(document.querySelectorAll('.tab__content'));
        tabContents.forEach((e) => {
          e.classList.remove('tab__content_active');
          })
          tabContents[i].classList.add('tab__content_active');
      })
  })