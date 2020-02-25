import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthentificationComponent } from './authentification/authentification.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitResolver } from './produit/produit.resolver'
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  
  {path:"login",component:AuthentificationComponent},
  {path:"signup",component:InscriptionComponent},
  {path:"not-found",component:FourOhFourComponent},
  {path:"produit",component:ProduitComponent,resolve:{produits:ProduitResolver}},
  {path:"**",redirectTo:'/not-found'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ProduitResolver]
})
export class AppRoutingModule { }
