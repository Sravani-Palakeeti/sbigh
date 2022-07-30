import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficExpoComponent } from './traffic-expo.component';

describe('TrafficExpoComponent', () => {
  let component: TrafficExpoComponent;
  let fixture: ComponentFixture<TrafficExpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficExpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficExpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
