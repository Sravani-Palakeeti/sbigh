import { TestBed } from '@angular/core/testing';

import { TrafficExpoService } from './traffic-expo.service';

describe('TrafficExpoService', () => {
  let service: TrafficExpoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficExpoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
