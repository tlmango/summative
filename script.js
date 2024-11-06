
window.addEventListener('load', function() {
  setTimeout(function() {
    var loader = document.querySelector('.page-loader');
    if (loader) {
      loader.style.transition = 'opacity 0.5s ease'; 
      loader.style.opacity = 0;
      setTimeout(function() {
        loader.style.display = 'none';
      }, 500); 
    }
  }, 3500);
});

document.addEventListener("DOMContentLoaded", () => { 
  const collapsible = document.querySelector(".collapsible"); 
  const content = document.querySelector(".content");
  
  collapsible.addEventListener("click", () => { 
    content.style.display = content.style.display === "block" ? "none" : "block"; 
  }); 
});
