import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id18Component } from './id18.component';

describe('Id18Component', () => {
  let component: Id18Component;
  let fixture: ComponentFixture<Id18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
