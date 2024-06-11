// generating randowm value 

let randomValue =  Number((Math.random()*(99-1+1)+1).toFixed())


// selecting all Elements 

const userInputNumber = document.querySelector(".guessField")
const submitButton = document.querySelector("#subt")
const prevGuess = document.querySelector(".guesses")
const guessRemaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")
const p = document.createElement('p')
let arr = [];
let numGuess = 1;
let playGame = true ; 

if(playGame)
{
  submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
   const guess =  Number(userInputNumber.value);
   validateGuess(guess);
 //   console.log(guess)
  });
}
function validateGuess(num)
{
  if(isNaN(num))
  {
    alert("please enter a valid number")
  }
  else if (num<1)
  {
    alert("please enter a number greater than 1 ")
  }
  else if (num >100)
  {
    alert("please enter a number less than 100 ")
  }
  else 
  {
    arr.push(num)
    
    if(numGuess === 10)
    {
      displayGuess(num)
      displayMessage(`Game Over Random Value is ${randomValue}`)
      endGame();
    }
    else 
    {
      displayGuess(num)
      checkGuess(num)
    }
  }

}
function checkGuess(num)
{
  if(num === randomValue)
  {
    displayMessage("You guessed it right")
    endGame();
  }

  if(num < randomValue)
  {
    displayMessage("Number is too Low")
  }
  if(num > randomValue)
  {
    displayMessage("Number is too high")
  }
}
function displayGuess(guess)
{
  userInputNumber.value = ''
  prevGuess.innerHTML += `${guess} ,`
  numGuess++;
  guessRemaining.innerHTML = `${11-numGuess}`
}
function displayMessage(message )
{
  lowOrHi.innerHTML = message;
}
function endGame ()
{
  userInputNumber.value = ''
  userInputNumber.setAttribute("disabled",'')
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p)
  playGame = false;
  newGame();
}
function newGame ()
{
  const newG = document.querySelector("#newGame")
  newG.addEventListener('click' , (e)=>
  {
    e.preventDefault()
    randomValue =  (Math.random()*(99-1+1)+1).toFixed()
    arr = []
    numGuess=1
    prevGuess.innerHTML = ' '
    guessRemaining.innerHTML = 10
    userInputNumber.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true 
  })

}