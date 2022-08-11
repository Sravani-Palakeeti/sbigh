import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id14Component } from './id14.component';

describe('Id14Component', () => {
  let component: Id14Component;
  let fixture: ComponentFixture<Id14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
