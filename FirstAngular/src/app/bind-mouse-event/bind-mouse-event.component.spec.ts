import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindMouseEventComponent } from './bind-mouse-event.component';

describe('BindMouseEventComponent', () => {
  let component: BindMouseEventComponent;
  let fixture: ComponentFixture<BindMouseEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindMouseEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindMouseEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
