document.addEventListener("DOMContentLoaded", function(event) { 

    const bodyContainer = document.getElementById("container");
    let amountDiv = 25;

    for (let i = 0; i < amountDiv; i++){
        const addDiv = document.createElement("div")
        addDiv.classList.add("squares")
        bodyContainer.append(addDiv)
    }

    const squares = document.querySelectorAll('.squares')
    squares.forEach(function(elem){
        elem.addEventListener("mouseover", function(){
            console.log("works bis hier")
            elem.classList.add("blackBackground")
        })
    })
   
  });

  function changeSize() {
    let sizePrompt = prompt("Size?", "65")
    amountDiv = sizePrompt;
    console.log("helo melo")
}