import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownUpKeyCounterComponent } from './down-up-key-counter.component';

describe('DownUpKeyCounterComponent', () => {
  let component: DownUpKeyCounterComponent;
  let fixture: ComponentFixture<DownUpKeyCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownUpKeyCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownUpKeyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
