import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URLS } from '../config/api.url.config';
import {User} from '../inscription/user';




@Injectable()
export class UserService{
    user:User=new User;
    isAuth=false;
    constructor (private http:HttpClient){

    }

    getUser():Observable<any>{
        return this.http.get(API_URLS.USERS_URL);
    }
    
  
    addUser(user:User):Observable<any>{
        return this.http.post(API_URLS.USERS_URL,user);

    }

   

    signIn(user:User):Observable<any>{
    
        this.isAuth=true;
        
        return this.http.get(API_URLS.USERS_URL+'/getByEmail/'+user.email+'/'+user.mdp);
    
    }

    login(user:User) {
        console.log("Authentication ")
                this.http.post<Observable<boolean>>(API_URLS.USERS_URL+'/login', {
                    email: this.user.email,
                    mdp: this.user.mdp
                  }).subscribe(isValid => {
                      if (isValid) {
                          sessionStorage.setItem(
                            'token', 
                            btoa(this.user.email + ':' + this.user.mdp)
                          );
                          console.log("Authentication success.")
                      } else {
                        console.log("Authentication failed.")
                      }
                  });
            }
    

/*
    signInn(id:number):Observable<any>{
    
        this.isAuth=true;
        return this.http.get(API_URLS.USERS_URL+'/get/'+id);
    
    }*/

    signOut(){
        this.isAuth=false;
    }

}