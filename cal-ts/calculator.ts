         //function that display value
          function display(val) 
         { 
              document.getElementById("result").value+=val 
         }

             //function that evaluates the digit and return result 
         function solve() 
         { 
             let x:number = document.getElementById("result").value 
             let y:number = eval(x) 
             document.getElementById("result").value = y 
         } 

          //function that clear the display 
         function clr() 
         { 
             document.getElementById("result").value = "" 
         } 