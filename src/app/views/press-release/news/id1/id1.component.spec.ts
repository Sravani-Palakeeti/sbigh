import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id1Component } from './id1.component';

describe('Id1Component', () => {
  let component: Id1Component;
  let fixture: ComponentFixture<Id1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
