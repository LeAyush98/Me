var music = document.getElementById("music");
var water = document.getElementById("water");
var underwater = document.getElementById("underwater");

var play_music = false

music.addEventListener('click', function(){
  if (play_music == false){
      play_music = true;
      water.play();
      
  }
  else{
    play_music = false;
    water.pause();
    underwater.pause();
  } 
  
});

// background-image: url("/../../static/images/overlay.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url("../../images/bg.gif"); 
const targetElement = document.getElementById('card');
const bodyElement = document.body;

targetElement.addEventListener('mouseleave', function() {
  bodyElement.style.backgroundImage = 'url("/../../static/images/overlay.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url("static/images/bg.gif")';
  underwater.pause();
  if (play_music){
    water.play();
  }
  
});

targetElement.addEventListener('mouseenter', function() {
  bodyElement.style.backgroundImage = 'url("/../../static/images/overlay.png"), linear-gradient(60deg, rgba(255, 165, 150, 0.5) 5%, rgba(0, 228, 255, 0.35)), url("static/images/underwater.gif")';
  water.pause();
  if (play_music){
    underwater.play();
  }
  
});