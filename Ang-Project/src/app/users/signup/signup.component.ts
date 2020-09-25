import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	title = "Abdul Rehman"
	today=Date.now()
	str="Hello Angular"
	val=10


  constructor() { }

  ngOnInit(): void {
  }

}
