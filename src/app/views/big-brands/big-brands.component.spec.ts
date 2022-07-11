import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBrandsComponent } from './big-brands.component';

describe('BigBrandsComponent', () => {
  let component: BigBrandsComponent;
  let fixture: ComponentFixture<BigBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
