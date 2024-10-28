document.addEventListener("DOMContentLoaded", () => { 
  const sidebar = document.getElementById("sidebar"); 
  const collapsible = document.querySelector(".collapsible"); 
  const content = document.querySelector(".content");
  
  collapsible.addEventListener("click", () => { 
        sidebar.classList.toggle("collapsed"); 
    content.style.display = content.style.display === "block" ? "none" : "block"; 
  }); 
});

