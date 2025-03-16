/*
          __                                      
  _______/  |_  ________________     ____   ____  
 /  ___/\   __\/  _ \_  __ \__  \   / ___\_/ __ \ 
 \___ \  |  | (  <_> )  | \// __ \_/ /_/  >  ___/ 
/____  > |__|  \____/|__|  (____  /\___  / \___  >
     \/                         \//_____/      \/ 
*/

// 1 - click on the button, then add your name to localstorage in the key "myName"
document.getElementById("btn1").addEventListener("click", () => {
  let name = prompt("Name?", "Bob");
  localStorage.setItem("myName", name);
});

// 2 - click on the button to read the value of "myName" from localstorage and display it span#myName
document.getElementById("btn2").addEventListener("click", () => {
  document.getElementById("myName").innerHTML = localStorage.getItem("myName");
});

// 3 - click on remove button to remove "myName" from localstorage
document.getElementById("btn3").addEventListener("click", () => {
  localStorage.removeItem("myName");
});

// 4 - click on the button to add a movie to the localstorage in the key "movies", show movies in the ul#movieList
// hint: the value of movies should be an array of strings
// hint: you can use JSON.stringify to convert an array to string
// hint: you can use JSON.parse to convert a string to array
// hint: you can use appendChild to add a new li to the ul#movieList
document.getElementById("btn4").addEventListener("click", () => {
  let movie = document.getElementById("movie").value;
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  movies.push(movie);
  localStorage.setItem("movies", JSON.stringify(movies));

  let ul = document.getElementById("movieList");
  ul.innerHTML = ""; // Clear the list before adding all movies
  movies.forEach((movie) => {
    let li = document.createElement("li");
    li.innerHTML = movie;
    ul.appendChild(li);
  });
});
