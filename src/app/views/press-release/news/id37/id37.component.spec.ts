import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id37Component } from './id37.component';

describe('Id37Component', () => {
  let component: Id37Component;
  let fixture: ComponentFixture<Id37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id37Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
