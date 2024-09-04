import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { BasketsModule } from './baskets/baskets.module';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { PasswordResetModule } from './password-reset/password-reset.module';
import { UpdatePasswordModule } from './update-password/update-password.module';
import { ComponentsComponent } from './components.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProductsModule,
    HomeModule,
    BasketsModule,
    RegisterModule,
    //LoginModule,
    PasswordResetModule,
    UpdatePasswordModule

  ],
  exports: [
    BasketsModule
  ]
})
export class ComponentsModule { }
