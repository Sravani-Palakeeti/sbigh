import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobexComponent } from './jobex.component';

describe('JobexComponent', () => {
  let component: JobexComponent;
  let fixture: ComponentFixture<JobexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
