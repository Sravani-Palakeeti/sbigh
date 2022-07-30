import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id28Component } from './id28.component';

describe('Id28Component', () => {
  let component: Id28Component;
  let fixture: ComponentFixture<Id28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id28Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
