import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IraqComponent } from './iraq.component';

describe('IraqComponent', () => {
  let component: IraqComponent;
  let fixture: ComponentFixture<IraqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IraqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IraqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
