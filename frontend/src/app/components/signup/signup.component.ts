import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

public form = {
	name:null,
 	email:null,
 	password:null,
 	password_confirmation:null
 }

  constructor() { }

  private usersListing : any = [];

  onSubmit(){


  	      var users = localStorage.getItem('users');
      if (users) {
        this.usersListing = JSON.parse(users);
        this.usersListing.push(this.form);
        localStorage.setItem('users',JSON.stringify(this.usersListing));
      }else {
        this.usersListing.push(this.form);
        localStorage.setItem('users',JSON.stringify(this.usersListing));
      }

      this.form = {name:null,email:null,password:null,password_confirmation:null};


  }
  ngOnInit(): void {
  }

}
