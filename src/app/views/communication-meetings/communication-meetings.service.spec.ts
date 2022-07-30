import { TestBed } from '@angular/core/testing';

import { CommunicationMeetingsService } from './communication-meetings.service';

describe('CommunicationMeetingsService', () => {
  let service: CommunicationMeetingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunicationMeetingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
