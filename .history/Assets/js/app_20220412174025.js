const tabs = document.querySelectorAll('[data-target]');
tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
   tab.addEventListener("click", (e) =>{
      const target = document.querySelector("tab.dataset.target")
      tabContent.forEach(content =>{
         content.classList.remove("filters__active");
      })
      target.classList.add()
   })
})