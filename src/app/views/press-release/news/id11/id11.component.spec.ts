import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id11Component } from './id11.component';

describe('Id11Component', () => {
  let component: Id11Component;
  let fixture: ComponentFixture<Id11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
