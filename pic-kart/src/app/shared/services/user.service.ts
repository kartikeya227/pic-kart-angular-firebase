import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, observable, Observable, Subscriber } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private logoutFlagSource = new BehaviorSubject<boolean>(false);
  logoutFlag = this.logoutFlagSource.asObservable()
  
  constructor(private afa: AngularFireAuth,
    private router: Router ) {
      afa.authState.subscribe(user=>{
        if(user!=null){
          this.changeLogoutFlag(true);
        }
    });
   }

    changeLogoutFlag(LogoutFlag: boolean) {
    this.logoutFlagSource.next(LogoutFlag);
    if(!LogoutFlag){
      localStorage.removeItem("user");
      this.afa.signOut();
      this.router.navigate(['/home']);
      alert("logout done");
    }
  }
}
