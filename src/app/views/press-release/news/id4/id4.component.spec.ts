import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id4Component } from './id4.component';

describe('Id4Component', () => {
  let component: Id4Component;
  let fixture: ComponentFixture<Id4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
