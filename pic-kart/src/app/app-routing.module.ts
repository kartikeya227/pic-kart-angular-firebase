import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import {LoggedInGuard} from 'ngx-auth-firebaseui';
import { AuthGaurdService } from './shared/Gaurds/auth-gaurd.service';

const routes: Routes = 
[
  { 
    path: 'customer',
    loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule),
    canActivate: [LoggedInGuard,AuthGaurdService],
    data:
    {
      expectedRole: 'customer'
    }
  },
  { 
    path: 'seller', 
    loadChildren: () => import('./modules/seller/seller.module').then(m => m.SellerModule),
    canActivate: [LoggedInGuard,AuthGaurdService],
    data:
    {
      expectedRole: 'seller'
    }
  },
  { path: 'sign-in', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: LandingPageComponent },
{ path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
