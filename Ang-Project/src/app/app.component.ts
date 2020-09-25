import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang-Project';
  Name = 'Khan';

  computer(){
  	return this.Name;
  }

  obj = {
  	Name: "Abdul Rehman",
  	Class: "BSCS"
  }

  arr = ["Hello", "I", "Am", "Khan"]
  siteUrl = window.location.href

  clicked(){
    alert ("Helloo button");
  }

 /* childdata(){
    console.log('Hello Children');
  } */

  childdata = [

    {
      name : "Hello Children",
      Age : 100
    },

    {
      name : "Hai",
      Age : 100
    },

    {
      name : "Khan",
      Age : 100
    }    
  ]

}
