import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id24Component } from './id24.component';

describe('Id24Component', () => {
  let component: Id24Component;
  let fixture: ComponentFixture<Id24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id24Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
