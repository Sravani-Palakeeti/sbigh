import { TestBed } from '@angular/core/testing';

import { ArabianTravelMarketService } from './arabian-travel-market.service';

describe('ArabianTravelMarketService', () => {
  let service: ArabianTravelMarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArabianTravelMarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
