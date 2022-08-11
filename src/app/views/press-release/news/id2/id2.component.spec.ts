import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id2Component } from './id2.component';

describe('Id2Component', () => {
  let component: Id2Component;
  let fixture: ComponentFixture<Id2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
