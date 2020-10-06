import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


	public form = {
		firstname:null,
		lastname:null,
		email:null,
		password:null
	};

  constructor() { }


  onSubmit(){
     
	console.log(this.form);     

  }  

  ngOnInit() {
  }

}
