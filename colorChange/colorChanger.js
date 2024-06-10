const allButtons = document.querySelectorAll(".button");
allButtons.forEach((item)=>{
  item.addEventListener("mouseover",(e)=>{
    console.log(e);
    console.log(e.target);
    if(e.target.id === "yellow")
    {
      document.body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "blue"){
      document.body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "white"){
      document.body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "grey"){
      document.body.style.backgroundColor = e.target.id;
    }

  })
})