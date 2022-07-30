import { TestBed } from '@angular/core/testing';

import { CommercialVehicleService } from './commercial-vehicle.service';

describe('CommercialVehicleService', () => {
  let service: CommercialVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommercialVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
