import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteTenantPage } from './delete-tenant.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteTenantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteTenantPageRoutingModule {}
