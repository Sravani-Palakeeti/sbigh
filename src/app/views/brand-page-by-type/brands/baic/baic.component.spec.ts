import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BAICComponent } from './baic.component';

describe('BAICComponent', () => {
  let component: BAICComponent;
  let fixture: ComponentFixture<BAICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BAICComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BAICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
