import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id13Component } from './id13.component';

describe('Id13Component', () => {
  let component: Id13Component;
  let fixture: ComponentFixture<Id13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
