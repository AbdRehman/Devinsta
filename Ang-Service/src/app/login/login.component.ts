import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../user-data.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private user:UserDataService) {
  		console.log(user.getData().name)	
   }

  ngOnInit(): void {
  }

}
