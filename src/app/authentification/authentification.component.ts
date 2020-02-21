import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  
  authStatus:boolean;
  
  constructor(private authService :AuthService, private router:Router) { }

  ngOnInit(): void {
  }


  onSignIn(){
    this.authService.signIn();
    
      this.authStatus=this.authService.isAuth;
      console.log('cnx réussie');



  }
  onSignOut(){
    this.authService.signOut();
    this.authStatus=this.authService.isAuth;


  }
}
