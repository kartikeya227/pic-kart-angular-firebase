import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { ViewProductCustomerComponent } from '../customers/view-product-customer/view-product-customer.component';
import { SellerComponent } from './seller.component';
import { ViewProductSellerComponent } from './view-product-seller/view-product-seller.component';

const routes: Routes = [
  { path: '', component: SellerComponent },
  { path: 'view-products', component: ViewProductSellerComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
