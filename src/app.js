import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const getRamdomWord = (arr) => {
    let result = arr[Math.floor(Math.random() * arr.length)]
    return result
  }

  let excuse = document.getElementById("excuse")
  excuse.innerHTML = `${getRamdomWord(who)}  ${getRamdomWord(action)}  ${getRamdomWord(what)}  ${getRamdomWord(when)}`;

}
