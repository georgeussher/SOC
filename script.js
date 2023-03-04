let timeBoxEl = document.getElementById("time-box");
//var appendSeconds = document.getElementById("seconds")
//var appendMilliseconds = document.getElementById("milliseconds")
//var buttonStart = document.getElementById("start")
//var buttonStop = document.getElementById("stop")
//var buttonReset = document.getElementById("reset")
//var seconds = 00;
//var milliseconds = 00;
//var interval;

function timeCall(){
timeBoxEl.textContent = Date()
}

// function startTimer(){
//   milliseconds++; 
//   if (milliseconds < 9){
//     appendMilliseconds.textContent = "0" + milliseconds;
//   } if (milliseconds > 9){
//     appendMilliseconds.textContent = milliseconds;
//   } if (milliseconds > 99){
//     seconds++;
//     appendSeconds.textContent = "0" + seconds;
//     milliseconds = 0;
//     appendMilliseconds.textContent = "0" + milliseconds;
//   } if (seconds > 9){
//     appendSeconds.textContent = seconds;
//   }
// }
//   buttonStart.onclick = function(){
//    interval = setInterval(startTimer);
// };
// console.log(timeBoxEl)
