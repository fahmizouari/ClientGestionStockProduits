import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { SignUpInfo } from '../auth/signup-info';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  userForm: FormGroup;

  user: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private fb :FormBuilder ,private authService: AuthService) {
    this.initUser();
   }
   ngOnInit(): void {
    this.initUser();
  }

  initUser(){
    this.user=new SignUpInfo();
    this.createForm();

  }
   createForm(){
    this.userForm=this.fb.group(
      {
        name:['',Validators.required],
        username: ['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required]
      }
    );
   }
  
  SignUp(){
    const u=this.userForm.value;
    console.log()
    this.authService.signUp(u).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
    

  }

}
