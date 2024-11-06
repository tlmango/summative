document.addEventListener("DOMContentLoaded", () => { 
  const collapsible = document.querySelector(".collapsible"); 
  const content = document.querySelector(".content");
  
  collapsible.addEventListener("click", () => { 
    content.style.display = content.style.display === "block" ? "none" : "block"; 
  }); 
});

function closepreloader(){
            document.getElementById("preloader").style.display = 'none';
        }
        window.addEventListener("load",function(){
            setTimeout(closepreloader, 2000);
            
        });
