import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  getData(){
  	return {
  		name:'Ali',
  		id:10
  	}
  }
}
