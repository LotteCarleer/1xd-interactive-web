/*
 _____                _       
|  ___|              | |      
| |____   _____ _ __ | |_ ___ 
|  __\ \ / / _ \ '_ \| __/ __|
| |___\ V /  __/ | | | |_\__ \
\____/ \_/ \___|_| |_|\__|___/
                                                           
*/

// 1 — Click on the button and show an alert()
// hint: first select the button, then add an event listener to it
document.getElementById("btn1").addEventListener("click", () => {
  document.body.style.transition = "transform 2s";
  document.body.style.transform = "rotate(360deg)";
  alert("I did a barrel roll!");
});

// 2 — Hover over the square (#zone1) and change its background color
document.getElementById("zone1").addEventListener("mouseover", () => {
  document.getElementById("zone1").style.backgroundColor = "red";
});

// 3 —Click on the link to display the hidden Message
// hint: first see how the message is hidden, then do the opposite
// hint2: prevent the default behavior of the link by using .preventDefault()
document.querySelector(".show3").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".hiddenMessage").style.display = "block";
});

// 4 — Similar to question number 2, this time use event bubbling to change the background color of the squares in #bubbleZone
// hint: with event bubbling you can select the parent element and listen for events on its children to avoid adding multiple event listeners
const bubblezone = document.getElementById("bubbleZone");
bubblezone.addEventListener("mouseover", (event) => {
  if (event.target.id != "bubbleZone") {
    event.target.style.backgroundColor = "pink";
  }
});

// 5 —Bonus: use mouseout to change the background color back to the original one on the squares in question 2 or 4
