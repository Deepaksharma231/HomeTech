import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CoustmerGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) { }

  canActivate(): boolean {
    if (this._auth.loggedIn() && this._auth.getJwtData().role == "Customer") {
      return true
    } else {
      this._router.navigate(['/login'])
    }
    return false
  }

}
