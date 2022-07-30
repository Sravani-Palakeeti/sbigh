import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FawBestuneComponent } from './faw-bestune.component';

describe('FawBestuneComponent', () => {
  let component: FawBestuneComponent;
  let fixture: ComponentFixture<FawBestuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FawBestuneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FawBestuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
