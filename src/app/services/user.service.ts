import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URLS } from '../config/api.url.config';





@Injectable()
export class UserService{

    
    constructor (private http:HttpClient){

    }

    getUserBoard():Observable<string>{
        return this.http.get(API_URLS.USERS_URL, { responseType: 'text' });
    }

    getAdminBoard(): Observable<string> {
        return this.http.get(API_URLS.ADMIN_URL, { responseType: 'text' });
      }
    
  
  
}