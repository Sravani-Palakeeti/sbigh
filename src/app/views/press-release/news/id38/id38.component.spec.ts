import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id38Component } from './id38.component';

describe('Id38Component', () => {
  let component: Id38Component;
  let fixture: ComponentFixture<Id38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id38Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
