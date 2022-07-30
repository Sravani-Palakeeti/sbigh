import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCarComponent } from './popular-car.component';

describe('PopularCarComponent', () => {
  let component: PopularCarComponent;
  let fixture: ComponentFixture<PopularCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
