import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyEventsComponent } from './key-events.component';

describe('KeyEventsComponent', () => {
  let component: KeyEventsComponent;
  let fixture: ComponentFixture<KeyEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
