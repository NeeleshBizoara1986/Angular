import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredLoadingclsComponent } from './deferred-loadingcls.component';

describe('DeferredLoadingclsComponent', () => {
  let component: DeferredLoadingclsComponent;
  let fixture: ComponentFixture<DeferredLoadingclsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferredLoadingclsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferredLoadingclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
