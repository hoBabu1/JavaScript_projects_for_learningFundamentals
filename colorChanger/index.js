function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
  }
  let intervalId 
  function changeColor(){
    intervalId= setInterval(()=>{
      document.body.style.backgroundColor = getRandomColor();
    },100)
  }
  
  document.querySelector("#start").addEventListener("click",changeColor)
  
  document.querySelector("#stop").addEventListener("click",(e)=>{
    clearInterval(intervalId)
    intervalId = null ;
  })