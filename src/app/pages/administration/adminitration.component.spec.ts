import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminitrationComponent } from './adminitration.component';

describe('AdminitrationComponent', () => {
  let component: AdminitrationComponent;
  let fixture: ComponentFixture<AdminitrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminitrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
