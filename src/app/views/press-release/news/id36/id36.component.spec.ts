import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id36Component } from './id36.component';

describe('Id36Component', () => {
  let component: Id36Component;
  let fixture: ComponentFixture<Id36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id36Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
