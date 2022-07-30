import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecreationActivitiesComponent } from './recreation-activities.component';

describe('RecreationActivitiesComponent', () => {
  let component: RecreationActivitiesComponent;
  let fixture: ComponentFixture<RecreationActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecreationActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecreationActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
