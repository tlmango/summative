
$(window).on('load',function(){
  setTimeout(function(){
  $('.page-loader').fadeOut('slow');
  },3500);
});

document.addEventListener("DOMContentLoaded", () => { 
  const collapsible = document.querySelector(".collapsible"); 
  const content = document.querySelector(".content");
  
  collapsible.addEventListener("click", () => { 
    content.style.display = content.style.display === "block" ? "none" : "block"; 
  }); 
});
