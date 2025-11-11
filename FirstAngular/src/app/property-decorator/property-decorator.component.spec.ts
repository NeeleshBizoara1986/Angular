import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDecoratorComponent } from './property-decorator.component';

describe('PropertyDecoratorComponent', () => {
  let component: PropertyDecoratorComponent;
  let fixture: ComponentFixture<PropertyDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyDecoratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
