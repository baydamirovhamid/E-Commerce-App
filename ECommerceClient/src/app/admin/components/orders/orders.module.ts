import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from '../../../dialogs/dialog.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { OrdersComponent } from './orders.component';
import { DeleteDirectiveModule } from '../../../directives/admin/delete.directive.module';




@NgModule({
  declarations: [
    OrdersComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: OrdersComponent }
    ]),
    MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatPaginatorModule,
    DialogModule,
    DeleteDirectiveModule
  ]
})
export class OrdersModule { }
