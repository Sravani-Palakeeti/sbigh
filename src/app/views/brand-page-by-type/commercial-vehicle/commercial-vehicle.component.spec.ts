import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialVehicleComponent } from './commercial-vehicle.component';

describe('CommercialVehicleComponent', () => {
  let component: CommercialVehicleComponent;
  let fixture: ComponentFixture<CommercialVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
