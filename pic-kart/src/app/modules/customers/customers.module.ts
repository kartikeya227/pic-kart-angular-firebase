import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ViewProductCustomerComponent } from './view-product-customer/view-product-customer.component';
import { ViewOrdersCustomerComponent } from './view-orders-customer/view-orders-customer.component';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ViewProductCustomerComponent,
    ViewOrdersCustomerComponent,
    CustomerCartComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
