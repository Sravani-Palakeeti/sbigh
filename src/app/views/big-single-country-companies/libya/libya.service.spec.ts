import { TestBed } from '@angular/core/testing';

import { LibyaService } from './libya.service';

describe('LibyaService', () => {
  let service: LibyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
