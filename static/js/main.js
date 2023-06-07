var card = document.getElementById("card");
var press = document.getElementById("press");

card.addEventListener('mouseenter', function() {
    press.style.visibility = 'visible';
  });
  
card.addEventListener('mouseleave', function() {
    press.style.visibility = 'hidden';
  });

  