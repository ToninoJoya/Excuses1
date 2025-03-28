import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let ramdom1 = Math.floor(Math.random() * who.length);
  let ramdom2 = Math.floor(Math.random() * what.length);
  let ramdom3 = Math.floor(Math.random() * action.length);
  let ramdom4 = Math.floor(Math.random() * when.length);

  let excuse = document.getElementById("excuse")
  excuse.innerHTML = `${who[ramdom1]}  ${action[ramdom2]}  ${what[ramdom3]}  ${when[ramdom4]}`;
  
}