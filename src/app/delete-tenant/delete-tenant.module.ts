import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteTenantPageRoutingModule } from './delete-tenant-routing.module';

import { DeleteTenantPage } from './delete-tenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteTenantPageRoutingModule
  ],
  declarations: [DeleteTenantPage]
})
export class DeleteTenantPageModule {

  handlerMessage = '';
  roleMessage = '';

  
}


