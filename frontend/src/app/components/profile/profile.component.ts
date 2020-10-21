import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

public user : any = [];
  constructor() { 

	var users = localStorage.getItem('users');
	users = JSON.parse(users);
	var loginEmail = localStorage.getItem('logined_email');
	for (var i = 0; i < users.length; i++) {
		if (users[i].email == loginEmail) {
			this.user = users[i]
		}
	}
	console.log(this.user.email);
  }

  ngOnInit(): void {


  }

}
