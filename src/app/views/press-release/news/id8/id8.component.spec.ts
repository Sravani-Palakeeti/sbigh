import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id8Component } from './id8.component';

describe('Id8Component', () => {
  let component: Id8Component;
  let fixture: ComponentFixture<Id8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
