import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id16Component } from './id16.component';

describe('Id16Component', () => {
  let component: Id16Component;
  let fixture: ComponentFixture<Id16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
