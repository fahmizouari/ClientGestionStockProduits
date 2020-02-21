import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ProduitComponent } from './produit/produit.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent,
    ProduitComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
