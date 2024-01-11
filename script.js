const keys = document.getElementsByTagName("li");
const result = document.querySelector("p");
const clear = document.querySelector(".clear");
const sr = document.querySelector(".sr");
const divis = document.querySelector(".divis");
const perc = document.querySelector(".percent");


for (let i = 0; i < keys.length; i++) {
    if (keys[i].innerHTML === "=") {
        keys[i].addEventListener("click", calculate);
      } else {
        keys[i].addEventListener("click", addToCurrentValue(i));
      }
    }


    // function DivCurrentValue (){

    //     if (perc.innerHTML === "%")
    //     

    //     result.innerHTML/100
    // }}


    function addToCurrentValue(i) {
        return () => {
          if (keys[i].innerHTML === "÷") {
            result.innerHTML += "/";
          } else if (keys[i].innerHTML === "×") {
            result.innerHTML += "*";
          } else {
            result.innerHTML += keys[i].innerHTML;
          }
        };
      }

      
      function calculateD () {
        return (result.innerHTML = (result.innerHTML/100));

      }

      function calculateS () {
        return (result.innerHTML = Math.sqrt(result.innerHTML));
      }

      


      function calculate() {
        return (result.innerHTML = eval(result.innerHTML));
      }
    
      clear.addEventListener("click", () => {
        result.innerHTML = "";})

     divis.addEventListener("click", () => {
                result.innerHTML += "/"
            
      });

      perc.addEventListener("click", calculateD);


       sr.addEventListener("click", calculateS);


       
      
    