document.addEventListener("DOMContentLoaded", () => { 
  const collapsible = document.querySelector(".collapsible"); 
  const content = document.querySelector(".content"); 
  
  collapsible.addEventListener("click", () => { 
    content.style.display = content.style.display === "block" ? "none" : "block"; 
  }); 
});
