import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
const routes: Routes = [

	{
		path: 'login',
		component: LoginComponent
	},

	{
		path: '',
		component: AppComponent
	},
	{
		path: '**',
		component: PagenotfoundComponent
	}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
