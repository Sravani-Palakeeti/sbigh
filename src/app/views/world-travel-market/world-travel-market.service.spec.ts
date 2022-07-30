import { TestBed } from '@angular/core/testing';

import { WorldTravelMarketService } from './world-travel-market.service';

describe('WorldTravelMarketService', () => {
  let service: WorldTravelMarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldTravelMarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
