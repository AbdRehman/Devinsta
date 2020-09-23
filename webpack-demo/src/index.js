// import _ from 'lodash';
// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());


         //function that display value 

         // let display = (val) =>  document.getElementById("result").value+=val 
       

         //     //function that evaluates the digit and return result 
         // let solve = () =>
         // { 
         //     let x = document.getElementById("result").value 
         //     let y = eval(x) 
         //     document.getElementById("result").value = y 
         // } 

         //  //function that clear the display 
         //  let clr = () => 
         // { 
         //     document.getElementById("result").value = "" 
         // } 

        class display{
         	constructor(val){
         		this.val = document.getElementById("result").value+=val;
         	}
         }

         class solve{
         	constructor(){
         	 this.x = document.getElementById("result").value; 
             this.y = eval(x); 
             this.solve = function(){
             	return document.getElementById("result").value = y;
             };
         }

     }

         class clr{
         	constructor(){}
         	this.val = document.getElementById("result").value = ""
         }                  