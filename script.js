document.addEventListener("DOMContentLoaded", () => { 
  const sidebar = document.getElementById("sidebar"); 
  const collapsible = document.querySelector(".collapsible"); 
  
  collapsible.addEventListener("click", () => { 
    sidebar.classList.toggle("collapsed"); 
  }); 
});
