import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id7Component } from './id7.component';

describe('Id7Component', () => {
  let component: Id7Component;
  let fixture: ComponentFixture<Id7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
