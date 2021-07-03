import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  logoutFlag!: boolean;

  constructor(private us: UserService,
    private router: Router) {
   }

  ngOnInit(): void {
    this.us.logoutFlag.subscribe(lf => this.logoutFlag = lf);
  }

  logout(){
    this.us.changeLogoutFlag(false);
  }

  login(){
    this.router.navigate(['/sign-in']);
  }

}
