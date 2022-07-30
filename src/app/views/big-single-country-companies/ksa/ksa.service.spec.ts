import { TestBed } from '@angular/core/testing';

import { KsaService } from './ksa.service';

describe('KsaService', () => {
  let service: KsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
