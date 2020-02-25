import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../inscription/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  
  authStatus:boolean;
  user:User;
  loginForm: FormGroup;
  
  constructor(private userService :UserService,private fb :FormBuilder, private router:Router,private route:ActivatedRoute) {
    this.initUser();
   }
   
   ngOnInit(): void {
    this.authStatus=this.userService.isAuth;

    this.initUser();
    this.user=this.route.snapshot.data.user;


  }

   initUser(){
    this.user=new User();
    this.createForm();

  }
  
  createForm(){
    this.loginForm=this.fb.group(
      {
        email: ['',Validators.required],
        mdp:''
      }
    );
   }

  

  testLogin(){
    if(this.user)
{
  this.authStatus=this.userService.isAuth;
  console.log('cnx réussie');
}
else{
  console.log('échec de cnx');
}
  }
  onSignIn(){
    const u=this.loginForm.value;
    
    this.userService.signIn(u).subscribe(
      data=>{this.user=data,this.testLogin()},
      error=>{console.log('an error was occured')},
      ()=>(console.log('loading produit was done'))
    );
  
 
  }


  login() {
    const u=this.loginForm.value;
    
    this.userService.login(u);
        }


  onSignOut(){
    this.userService.signOut();
    this.authStatus=this.userService.isAuth;


  }
}











