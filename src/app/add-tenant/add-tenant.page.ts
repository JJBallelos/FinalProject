import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.page.html',
  styleUrls: ['./add-tenant.page.scss'],
})
export class AddTenantPage {
  tenants: Tenant[] = []; // Array to store the list of tenants

  // Tenant object to store the form data
  tenant: Tenant = {
    firstName: '',
    lastName: '',
    roomNumber: '',
  };

  constructor(private router: Router) {}

  addTenant() {
    // Check if all the required fields are filled before adding the tenant
    if (this.tenant.firstName && this.tenant.lastName && this.tenant.roomNumber) {
      // Add the tenant to the list
      this.tenants.push({ ...this.tenant });
      // Clear the form after adding the tenant
      this.tenant.firstName = '';
      this.tenant.lastName = '';
      this.tenant.roomNumber = '';
      // Redirect to the delete-tenant page after adding the tenant
      this.router.navigate(['/delete-tenant']);
    }
  }
}

// Interface for the Tenant object
interface Tenant {
  firstName: string;
  lastName: string;
  roomNumber: string;
}
