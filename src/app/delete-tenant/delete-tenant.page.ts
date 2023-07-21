import { Component } from '@angular/core';

interface Tenant {
  firstName: string;
  lastName: string;
  roomNumber: string;
}

@Component({
  selector: 'app-delete-tenant',
  templateUrl: './delete-tenant.page.html',
  styleUrls: ['./delete-tenant.page.scss'],
})
export class DeleteTenantPage {
  tenants: Tenant[] = [
    { firstName: 'Juan', lastName: 'Dela Cruz', roomNumber: '1' },
    { firstName: 'Macey Jane', lastName: 'Uryu', roomNumber: '2' },
    { firstName: 'Phoenix', lastName: 'Wright', roomNumber: '2' },
  ];

  removeTenant(tenant: Tenant) {
    const index = this.tenants.indexOf(tenant);
    if (index > -1) {
      this.tenants.splice(index, 1);
    }
  }
}