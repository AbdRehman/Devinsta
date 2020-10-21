import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public form = {
 	email:null,
 	password:null
 }


//private http:HttpClient
  constructor(private _router: Router) { }
  private usersListing = [];
  onSubmit(){

      var foundUser = false;
      var users = localStorage.getItem('users');
      if (users) {
        this.usersListing = JSON.parse(users);
        
        for (var i = 0; i < this.usersListing.length; i++) {
            
           // console.log(this.usersListing[i]);
            if (this.usersListing[i].email == this.form.email && this.usersListing[i].password == this.form.password) {
              foundUser = true;
              break;
            }
        }
        if (foundUser) {
          localStorage.setItem('logined_email',this.form.email);
          this._router.navigateByUrl('/profile');
          return;
        }
      }
      console.log('Invalid Login');

      // this.form = {email:null,password:null};
  }

/*  addUser(user){
    let users = [];
    if(localStorage.getItem('Users')){
        users = JSON.parse(localStorage.getItem('Users'));
        users = [user, ...users]
    }
      else{
          users = [users];
      }

      localStorage.setItem('form-data', JSON.stringify(users));
  } */

/*  onSubmit(){
  	return this.http.post('httl://localhost:8000/api/login',this.form).subscribe(
  		data => console.log(data),
  		error => console.log(error)
  	);
  } */

  ngOnInit(): void {
  }

}
