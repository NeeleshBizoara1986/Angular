import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerAndNgTemplateComponent } from './ng-container-and-ng-template.component';

describe('NgContainerAndNgTemplateComponent', () => {
  let component: NgContainerAndNgTemplateComponent;
  let fixture: ComponentFixture<NgContainerAndNgTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContainerAndNgTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContainerAndNgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
