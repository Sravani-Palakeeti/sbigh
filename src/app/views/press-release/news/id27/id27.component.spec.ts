import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id27Component } from './id27.component';

describe('Id27Component', () => {
  let component: Id27Component;
  let fixture: ComponentFixture<Id27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id27Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
