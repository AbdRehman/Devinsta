import { Component } from '@angular/core';
import {UserDataService} from './user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang-Service';

  constructor(private user:UserDataService)

  {
  	console.log(user.getData().name)
  }

}
