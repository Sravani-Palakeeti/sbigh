import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id19Component } from './id19.component';

describe('Id19Component', () => {
  let component: Id19Component;
  let fixture: ComponentFixture<Id19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
