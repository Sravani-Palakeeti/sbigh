import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id12Component } from './id12.component';

describe('Id12Component', () => {
  let component: Id12Component;
  let fixture: ComponentFixture<Id12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
