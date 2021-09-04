import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrganizationComponent } from './admin-organization.component';

describe('AdminComponent', () => {
  let component: AdminOrganizationComponent;
  let fixture: ComponentFixture<AdminOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
