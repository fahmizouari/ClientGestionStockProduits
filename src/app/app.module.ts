import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ProduitComponent } from './produit/produit.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ProduitService } from './services/produit.service';
import { InscriptionComponent } from './inscription/inscription.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent,
    ProduitComponent,
    AuthentificationComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,ProduitService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
