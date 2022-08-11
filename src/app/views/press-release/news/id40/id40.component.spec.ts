import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id40Component } from './id40.component';

describe('Id40Component', () => {
  let component: Id40Component;
  let fixture: ComponentFixture<Id40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id40Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
