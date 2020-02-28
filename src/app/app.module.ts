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
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    FourOhFourComponent,
    ProduitComponent,
    AuthentificationComponent,
    InscriptionComponent,
    UserComponent,
    AdminComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,ProduitService,UserService,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
