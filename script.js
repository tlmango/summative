document.addEventListener("DOMContentLoaded", () => { 
  const collapsible = document.querySelector(".collapsible"); 
  const content = document.querySelector(".content");
  
  collapsible.addEventListener("click", () => { 
    content.style.display = content.style.display === "block" ? "none" : "block"; 
  }); 
});

$(window).on('load',function(){
  setTimeout(function(){ // allowing 3 secs to fade out loader
  $('.page-loader').fadeOut('slow');
  },3500);
});
