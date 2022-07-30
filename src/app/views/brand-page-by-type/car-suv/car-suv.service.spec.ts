import { TestBed } from '@angular/core/testing';

import { CarSuvService } from './car-suv.service';

describe('CarSuvService', () => {
  let service: CarSuvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSuvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
