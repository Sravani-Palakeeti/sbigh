import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id9Component } from './id9.component';

describe('Id9Component', () => {
  let component: Id9Component;
  let fixture: ComponentFixture<Id9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
