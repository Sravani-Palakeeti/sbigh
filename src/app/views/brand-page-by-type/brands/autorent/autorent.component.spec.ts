import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorentComponent } from './autorent.component';

describe('AutorentComponent', () => {
  let component: AutorentComponent;
  let fixture: ComponentFixture<AutorentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
