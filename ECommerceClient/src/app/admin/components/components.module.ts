import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerModule } from './customer/customer.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthorizeMenuModule } from './authorize-menu/authorize-menu.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CustomerModule,
    ProductsModule,
    OrdersModule,
    DashboardModule,
    AuthorizeMenuModule
    
  ]
})
export class ComponentsModule { }
