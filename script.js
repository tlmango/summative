document.addEventListener("DOMContentLoaded", () => { 
  const content = document.querySelector(".content"); 
  const sidebar = document.getElementById("sidebar"); 
  
  collapsible.addEventListener("click", () => { 
    content.style.display = content.style.display === "block" ? "none" : "block"; 
  }); 
});
