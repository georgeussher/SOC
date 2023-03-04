var timeBoxEl = document.getElementById("time-box");
var appendseconds = document.getElementById("seconds")
var appendmilliseconds = document.getElementById("milliseconds")

var seconds = 00;
var milliseconds = 00;


function timeCall(){
timeBoxEl.innerHTML = Date()
}

function startTimer(){
  milliseconds++ 
  if (milliseconds < 9){
    appendmilliseconds.innerHTML = "0" + milliseconds
  }
}