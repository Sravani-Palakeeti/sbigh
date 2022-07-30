import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotammadCarsComponent } from './motammad-cars.component';

describe('MotammadCarsComponent', () => {
  let component: MotammadCarsComponent;
  let fixture: ComponentFixture<MotammadCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotammadCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotammadCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
