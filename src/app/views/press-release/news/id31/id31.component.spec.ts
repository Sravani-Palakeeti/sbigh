import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id31Component } from './id31.component';

describe('Id31Component', () => {
  let component: Id31Component;
  let fixture: ComponentFixture<Id31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id31Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
