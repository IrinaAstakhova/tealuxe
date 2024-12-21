const mBurger = document.querySelector(".burger"); 

mBurger.addEventListener("click", function() {  
  document.querySelector(".mob-menu").classList.toggle('vissible');
  document.querySelector(".container").style.filter = "brightness("+50+"%)";
  
});


const closeBurger = document.querySelector(".close"); 

closeBurger.addEventListener("click", function() {  
  document.querySelector(".mob-menu").classList.toggle('vissible');
  document.querySelector(".container").style.filter = "brightness("+100+"%)";
});

