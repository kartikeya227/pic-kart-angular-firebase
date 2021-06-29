import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {AuthProvider, Theme} from 'ngx-auth-firebaseui';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  themes = Theme;
  providers = AuthProvider;
  row:string = "row";
  constructor(
    private afs: AngularFirestore,
    private afa: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSuccess() {
    this.afa.authState.subscribe(userAuth=>{
      if(userAuth != null){
        this.afs.doc<User>('users/'+userAuth?.uid).valueChanges()
        .subscribe(userData=>{
              console.log("Display name:"+userData?.displayName);
              console.log("Role:"+userData?.role);
              if(userData?.displayName == null || 
                  userData?.displayName == '' || 
                  userData?.role == null ||
                  userData?.role == ''){
                    this.router.navigate(['/sign-up']);
              }
              else if(userData?.role == 'seller'){
                this.router.navigate(['/seller']);
              }
              else if (userData?.role == 'customer'){
                this.router.navigate(['/customer']);
              }
              localStorage.setItem('user', JSON.stringify(userData));
        });
      }
    });
  }
}
