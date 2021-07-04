import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { ViewProductSellerComponent } from './view-product-seller/view-product-seller.component';
import { AddProductSellerComponent } from './add-product-seller/add-product-seller.component';


@NgModule({
  declarations: [
    SellerComponent,
    ViewProductSellerComponent,
    AddProductSellerComponent
  ],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
