import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayDataBindingCalculationComponent } from './twoway-data-binding-calculation.component';

describe('TwowayDataBindingCalculationComponent', () => {
  let component: TwowayDataBindingCalculationComponent;
  let fixture: ComponentFixture<TwowayDataBindingCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwowayDataBindingCalculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowayDataBindingCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
