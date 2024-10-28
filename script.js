document.addEventListener("DOMContentLoaded", () => { 
  const sidebar = document.getElementById("sidebar"); 
  const content = document.querySelector(".content");
  
  collapsible.addEventListener("click", () => { 
    content.style.display = content.style.display === "block" ? "none" : "block"; 
  }); 
});

