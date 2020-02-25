import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URLS } from '../config/api.url.config';
import {User} from '../inscription/user';




@Injectable()
export class UserService{
    constructor (private http:HttpClient){

    }

    getUser():Observable<any>{
        return this.http.get(API_URLS.USERS_URL);
    }
    
  
    addUser(user:User):Observable<any>{
        return this.http.post(API_URLS.USERS_URL,user);

    }

}