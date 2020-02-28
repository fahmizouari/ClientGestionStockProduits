import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private tokenStorage: TokenStorageService,private authService:AuthService,private router:Router){
    }
    canActivate(route:ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        if (this.tokenStorage.getToken()) {
            return true;
          }
          else
          {
            this.router.navigate(['/authauth/login']);
            console.error('merci de se connecter');
          }
        

    }
}