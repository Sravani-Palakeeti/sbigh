import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpedilComponent } from './simpedil.component';

describe('SimpedilComponent', () => {
  let component: SimpedilComponent;
  let fixture: ComponentFixture<SimpedilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpedilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpedilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
