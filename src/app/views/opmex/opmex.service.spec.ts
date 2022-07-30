import { TestBed } from '@angular/core/testing';

import { OpmexService } from './opmex.service';

describe('OpmexService', () => {
  let service: OpmexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpmexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
