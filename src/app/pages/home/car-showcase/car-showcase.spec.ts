import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShowcase } from './car-showcase';

describe('CarShowcase', () => {
  let component: CarShowcase;
  let fixture: ComponentFixture<CarShowcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarShowcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarShowcase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
