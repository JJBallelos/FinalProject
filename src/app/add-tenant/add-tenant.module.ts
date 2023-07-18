import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTenantPageRoutingModule } from './add-tenant-routing.module';

import { AddTenantPage } from './add-tenant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTenantPageRoutingModule
  ],
  declarations: [AddTenantPage]
})
export class AddTenantPageModule {}
