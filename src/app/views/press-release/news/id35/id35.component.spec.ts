import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Id35Component } from './id35.component';

describe('Id35Component', () => {
  let component: Id35Component;
  let fixture: ComponentFixture<Id35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Id35Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Id35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
