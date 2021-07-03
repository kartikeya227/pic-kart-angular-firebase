import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { User } from 'src/app/shared/models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class SignUpComponent implements OnInit {

  userFormGroup = this.fb.group({
    displayName: ['',Validators.required],
    phoneNumber: ['',Validators.required],
    gender: ['',Validators.required],
    address: ['',Validators.required],
    role: ['',Validators.required]
  });
  
  user!: User;
  displaySpinner!: boolean;

  onSubmit(){
    this.displaySpinner = true;
    let userDetails = localStorage.getItem("user");
    if(userDetails != null){
      this.user = JSON.parse(userDetails);
    }
    this.afs.collection("users").doc(this.user.uid).update(this.userFormGroup.value)
    .then(res =>{
      Object.assign(this.user,this.userFormGroup.value);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/'+this.user.role]);
      this.openSnackBar("Profile Update Successful! Welcome onboard "+this.user.displayName, "Cool");
    },(err: string) => {
      this.openSnackBar("Profile Update failed", "Lets try again");
    }).finally(() => this.displaySpinner = false);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.displaySpinner = false;
  }

}
