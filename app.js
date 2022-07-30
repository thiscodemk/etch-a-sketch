document.addEventListener("DOMContentLoaded", function(event) { 

    const bodyContainer = document.getElementById("container");
    let amountDiv = 256;

    const changeColorBlack = () => {
        addDiv.classList.add("blackBackground");
    }

    for (let i = 0; i < amountDiv; i++){
        const addDiv = document.createElement("div")
        addDiv.classList.add("squares")
        bodyContainer.append(addDiv)
    }

   

  });