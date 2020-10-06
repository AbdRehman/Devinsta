import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Users/login/login.component';
import { SignUpComponent } from './Users/sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	
	{path : ' ' , component : LoginComponent},
	{path : 'login' , component : LoginComponent},
	{path : 'signup' , component : SignUpComponent},
	{path : '**' , component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
