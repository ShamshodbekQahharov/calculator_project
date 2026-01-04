const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.textContent;
    if(value === "C"){
        display.value="";
        display.placeholder="0";
    }
    else if(value ==="1"){
        display.value +="1";
    }
    else if(value ==="2"){
        display.value +="2";
    }
    else if(value ==="3"){
        display.value +="3";
    }
    else if(value ==="4"){
        display.value +="4";
    }
    else if(value === "5"){
        display.value +="5";
    }
    else if(value ==="6"){
        display.value +="6";
    }
    else if(value ==="7"){
        display.value +="7";
    }
    else if(value ==="8"){
        display.value +="8";
    }
    else if(value ==="9"){
        display.value +="9";
    }
    else if(value==="0"){
        if(display.value===""){
            display.value="";
        }
        else
            display.value+="0";
    }
     else if(value === "/"){
        display.value +="/";
    }
    else if(value ==="*"){
        display.value +="*";
    }
    else if(value ==="-"){
        display.value +="-";
    }
    else if(value ==="+"){
        display.value +="+";
    }
    else if(value === "="){
        if(!display.value) return;
        try{
            if(/^[0-9+\-*/]+$/.test(display.value)){
                const result = eval(display.value);
                display.value = String(result);
            } else {
                display.value = "Error";
            }
        } 
        catch (e) {
            display.value = "Error";
        }
    }
  });
});
