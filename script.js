let mysteryButton = document.getElementById('mystery-button');

function colorChange(event){
  event.target.style.color = "blue";
}

mysteryButton.addEventListener('click', colorChange);