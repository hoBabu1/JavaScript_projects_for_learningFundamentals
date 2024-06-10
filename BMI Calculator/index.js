const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  // get value of height and weight 
  const height = parseInt(form.querySelector("#height").value);
  const weight = parseInt(form.querySelector("#weight").value);
  const result = form.querySelector("#results");
  if(height == "" || height < 0 || isNaN(height))
  {
   result.innerHTML = "Invalid Height Details"
  }
  else if(weight == "" || weight < 0 || isNaN(weight))
  {
   result.innerHTML = "Invalid weight Details"
  }
  else {
    const calc = (weight / ((height*height)/10000).toFixed(4))
    if(calc<18.6)
    {
      result.innerHTML =` You are UnderWeight, your BMI value is ${calc} `
    }
    else if(calc>18.6 && calc<24.9)
    {
      result.innerHTML =` You lie in Normal Range, your BMI value is ${calc} `
    }
    else {
      result.innerHTML =` You are overWeight, your BMI value is ${calc} `
    }
  }

})