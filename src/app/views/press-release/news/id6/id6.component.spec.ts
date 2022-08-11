import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id6Component } from './id6.component';

describe('Id6Component', () => {
  let component: Id6Component;
  let fixture: ComponentFixture<Id6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
