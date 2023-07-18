import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DeleteTenantPage } from './delete-tenant.page';

describe('DeleteTenantPage', () => {
  let component: DeleteTenantPage;
  let fixture: ComponentFixture<DeleteTenantPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteTenantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
