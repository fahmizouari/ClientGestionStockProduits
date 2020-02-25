import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  userForm: FormGroup;
  user:User;
  constructor(private userService: UserService,private fb :FormBuilder ,private route:ActivatedRoute) {
    this.initUser();

   }

   createForm(){
    this.userForm=this.fb.group(
      {
        
        prenom:['',Validators.required],
        nom: ['',Validators.required],
        email:['',Validators.required],
        mdp:['',Validators.required]
      }
    );
   }


  ngOnInit(): void {
    this.initUser();
    this.user=this.route.snapshot.data.user;
  }
  initUser(){
    this.user=new User();
    this.createForm();

  }
  SignUp(){
    const u=this.userForm.value;
    this.userService.addUser(u).subscribe(
      res=>{
        this.initUser();
        this.user=this.route.snapshot.data.user;
      }
    );
  }

}
