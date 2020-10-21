import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public isLoggedIn = false;
  constructor(private _router: Router)  {
  	var loggedInUser = localStorage.getItem('logined_email');
  	if (loggedInUser) {
  		this.isLoggedIn = true;
  	}
   }
   
   logout(){
   	localStorage.removeItem('logined_email');
      this._router.navigateByUrl('/login');
   }
  ngOnInit(): void {
  }

}
