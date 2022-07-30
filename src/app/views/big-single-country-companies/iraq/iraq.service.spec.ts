import { TestBed } from '@angular/core/testing';

import { IraqService } from './iraq.service';

describe('IraqService', () => {
  let service: IraqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IraqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
