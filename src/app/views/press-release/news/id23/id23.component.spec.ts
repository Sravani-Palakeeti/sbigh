import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id23Component } from './id23.component';

describe('Id23Component', () => {
  let component: Id23Component;
  let fixture: ComponentFixture<Id23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id23Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
