let timeBoxEl = document.getElementById("time-box");
let timeOn = document.getElementById("elapsed-time");
let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let int = null

function timeCall(){
  timeBoxEl.innerHTML = Date()
}
function startTimer(){
  if (int !== null){
    clearInterval(int);
  }
  int = setInterval(displayTimer,10);
}
