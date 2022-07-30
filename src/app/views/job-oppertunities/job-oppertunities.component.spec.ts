import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOppertunitiesComponent } from './job-oppertunities.component';

describe('JobOppertunitiesComponent', () => {
  let component: JobOppertunitiesComponent;
  let fixture: ComponentFixture<JobOppertunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobOppertunitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOppertunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
