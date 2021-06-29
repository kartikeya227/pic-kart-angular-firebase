import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(
    private afs: AngularFirestore,
    private afa: AngularFireAuth,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    let expectedRole:string = route.data.expectedRole;
    let userString = localStorage.getItem('user');
    let user:User={};
    if(userString!=null)
    user= JSON.parse(userString);
 
    if(user.role == expectedRole){
      return true;
    }
    else {
      this.router.navigate(['/'+user.role]);
      return false;
    }
  }
}
