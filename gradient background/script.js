var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var initialBackground1 = color1.value; 
var initialBackground2 = color2.value; 
var genNew = document.getElementById("genNew");


css.textContent = "Initial values are: "+
initialBackground1+";  "+initialBackground2;

function setGradient(){
    body.style.background="linear-gradient(to right, "+
    color1.value +", "+color2.value+")"; 

    css.textContent = body.style.background+";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function setBg () {
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    body.style.background="linear-gradient(to right, "+
    "#" + randomColor1 +", "+ "#" + randomColor2+")"; 
    css.textContent = body.style.background+";";
  }
  
  genNew.addEventListener("click", setBg);
