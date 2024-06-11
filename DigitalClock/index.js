const timeToDisplay = document.querySelector("#clock");
let date = new Date();
timeToDisplay.innerHTML = date.toLocaleTimeString();

setInterval(function(){
  let date = new Date();
timeToDisplay.innerHTML = date.toLocaleTimeString();
},1000)