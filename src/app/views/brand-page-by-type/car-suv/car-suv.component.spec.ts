import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSuvComponent } from './car-suv.component';

describe('CarSuvComponent', () => {
  let component: CarSuvComponent;
  let fixture: ComponentFixture<CarSuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSuvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
