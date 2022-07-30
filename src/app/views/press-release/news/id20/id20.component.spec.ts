import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id20Component } from './id20.component';

describe('Id20Component', () => {
  let component: Id20Component;
  let fixture: ComponentFixture<Id20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
