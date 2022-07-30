import { TestBed } from '@angular/core/testing';

import { OmanService } from './oman.service';

describe('OmanService', () => {
  let service: OmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
