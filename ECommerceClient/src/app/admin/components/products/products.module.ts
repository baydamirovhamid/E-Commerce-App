import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DeleteDirective } from '../../../directives/admin/delete.directive';
import { MatDialogModule } from '@angular/material/dialog';
import 'alertifyjs/build/css/alertify.css';
import { FileUploadModule } from '../../../services/common/file-upload/file-upload.module';
import { DialogModule } from '../../../dialogs/dialog.module';
import { DeleteDirectiveModule } from '../../../directives/admin/delete.directive.module';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ListComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"", component:ProductsComponent}
    ]),
    MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatPaginatorModule, MatTableModule, DialogModule,FileUploadModule, DeleteDirectiveModule
  ]
})
export class ProductsModule { }
