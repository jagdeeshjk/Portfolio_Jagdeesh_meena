let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("light-theme")){
        icon.src = "moon.png";
    } else {
        icon.src = "sun.png";
    }
}

let count = 0;
let index = 0;
let currentText = '';
let letter = '';



const text = [
  "Welcome To My Page",
 
 
 
];


(function type() {
  if (count === text.length) {
      count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('#welcome').textContent = letter;
  if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 2000); // Pause before starting the next word
  } else {
      setTimeout(type, 200);
  }
})();

 


function promptPassword() {
    var password = prompt("Enter My date of Birth: __/__/____");
    if (password === "05/10/2003") {
      window.location.href = "know-more.html"; // redirect to know-more.html page
    } else {
      alert("Incorrect password. Try again!");
    }
  }






// Function to open modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex"; // Display modal as flex container
  }
  
  // Function to close modal
  function closeModal(close) {
    var modal = document.getElementById(close);
    modal.style.display = "none";
  }
  
