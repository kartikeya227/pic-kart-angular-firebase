import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthProvider, Theme } from "ngx-auth-firebaseui";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  constructor(public auth: AngularFireAuth,
    public router: Router,
    public snackbar: MatSnackBar) {}
  title = 'pic-kart';
}
