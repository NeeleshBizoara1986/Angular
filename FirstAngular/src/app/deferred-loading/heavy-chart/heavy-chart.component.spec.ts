import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyChartComponent } from './heavy-chart.component';

describe('HeavyChartComponent', () => {
  let component: HeavyChartComponent;
  let fixture: ComponentFixture<HeavyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
