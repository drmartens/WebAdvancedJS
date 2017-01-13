var result;
var x;
var y;
var fruittype = "Bananas";

var x;
var y;



var audio = new Audio('synth.wav');

function add() {
x = document.getElementById("xValue").value;
y = document.getElementById("yValue").value;
result = +x + +y;  //+x is like saying parseInt(x)
console.log(result);
document.getElementById("resultDiv").innerHTML = result;
audio.play();

}

function multiply () {
x = document.getElementById("xValue").value;
y = document.getElementById("yValue").value;
result = parseInt(x) * parseInt(y);
console.log(result);
document.getElementById("resultDiv").innerHTML = result;
audio.play();



};

function divide () {
x = document.getElementById("xValue").value;
y = document.getElementById("yValue").value;
result = parseInt(x) / parseInt(y);
console.log(result);
document.getElementById("resultDiv").innerHTML = result;
audio.play();



};

function subtract () {
x = document.getElementById("xValue").value;
y = document.getElementById("yValue").value;
result = parseInt(x) - parseInt(y);
console.log(result);
document.getElementById("resultDiv").innerHTML = result;
audio.play();

};

function setFruit() {
    fruittype = "Bananas";
}

switch (fruittype) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
   console.log("Sorry, we are out of " + fruittype + ".");
}
console.log("Is there anything else you'd like?");


