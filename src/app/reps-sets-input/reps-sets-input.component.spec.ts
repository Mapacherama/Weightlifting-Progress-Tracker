import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepsSetsInputComponent } from './reps-sets-input.component';

describe('RepsSetsInputComponent', () => {
  let component: RepsSetsInputComponent;
  let fixture: ComponentFixture<RepsSetsInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepsSetsInputComponent]
    });
    fixture = TestBed.createComponent(RepsSetsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
