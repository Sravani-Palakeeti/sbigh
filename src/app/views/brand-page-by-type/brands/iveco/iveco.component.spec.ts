import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvecoComponent } from './iveco.component';

describe('IvecoComponent', () => {
  let component: IvecoComponent;
  let fixture: ComponentFixture<IvecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
