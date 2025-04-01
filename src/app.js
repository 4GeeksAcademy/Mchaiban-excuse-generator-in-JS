import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The panda', 'My mom', 'The musician', 'My friend'];
let action = ['wrote', 'crushed', 'hacked', 'broke'];
let what = ['my homework', 'my phone', 'the car', 'my dreams'];
let when = ['before the earthquake', 'when I was contemplating life', 'while I was eating an ice-cream', 'during my lunch', 'while I was watching YouTube'];

function getRandomNumber (min,max) {
   return Math.floor(Math.random() * (max-min) + min)
}

function randomExcuse (anyArray) {
  let max = anyArray.length;
  let min = 0;
  let random = getRandomNumber (min,max);
  return anyArray [random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector ('#excuse') .innerHTML = randomExcuse(who) + " " + randomExcuse(action) + " " + randomExcuse(what) + " " + randomExcuse(when) + "." 
};
