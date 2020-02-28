import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthentificationComponent } from './authentification/authentification.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitResolver } from './produit/produit.resolver'
import { InscriptionComponent } from './inscription/inscription.component';

import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  
  {path:"auth/login",component:AuthentificationComponent},
  {path:"signup",component:InscriptionComponent},
  {path:"not-found",component:FourOhFourComponent},
  {path:"produit",canActivate:[AuthGuard],component:ProduitComponent,resolve:{produits:ProduitResolver}},
  {path:"user",canActivate:[AuthGuard],component:UserComponent},
  {path:"admin",canActivate:[AuthGuard],component:AdminComponent},
  {path:"home",component:HomeComponent},

  {path:"**",redirectTo:'/not-found'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ProduitResolver]
})
export class AppRoutingModule { }
