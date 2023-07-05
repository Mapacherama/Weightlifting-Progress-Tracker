import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionManagementComponent } from './nutrition-management.component';

describe('NutritionManagementComponent', () => {
  let component: NutritionManagementComponent;
  let fixture: ComponentFixture<NutritionManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NutritionManagementComponent]
    });
    fixture = TestBed.createComponent(NutritionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
