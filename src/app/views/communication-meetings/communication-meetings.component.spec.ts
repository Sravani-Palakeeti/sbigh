import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationMeetingsComponent } from './communication-meetings.component';

describe('CommunicationMeetingsComponent', () => {
  let component: CommunicationMeetingsComponent;
  let fixture: ComponentFixture<CommunicationMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationMeetingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
