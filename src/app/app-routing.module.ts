import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';


const routes: Routes = [
  {path:"login",component:AuthentificationComponent},
  {path:"not-found",component:FourOhFourComponent},
  {path:"**",redirectTo:'/not-found'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
