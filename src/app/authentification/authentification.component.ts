import { Component, OnInit } from '@angular/core';


import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  user:AuthLoginInfo;
  loginForm: FormGroup;
  
  constructor(private authService: AuthService, private fb :FormBuilder,private tokenStorage: TokenStorageService,private router:Router) {
    console.log("constructor");
    
    this.createForm();

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }

   }
   
   ngOnInit(): void {
    console.log("ngOnInit");

    this.initUser();
  }

   initUser(){
    this.user=new AuthLoginInfo();
    this.createForm();

  }
  createForm(){
    this.loginForm=this.fb.group(
      {
        username: ['',Validators.required],
        password:['',Validators.required]
      }
    );
   }


  login() {
    const loginInfo=this.loginForm.value;


    this.authService.attemptAuth(loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        //-------------------------
        this.reloadPage();
        
        //this.router.navigateByUrl('/home', { skipLocationChange: false });


      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );

  }
  reloadPage() {
    window.location.replace('/home');
  }
}











