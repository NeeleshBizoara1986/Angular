import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: true
})
export class UnlessDirective implements OnInit, OnChanges {
  private hasView = false;

  // The condition that determines whether to show or hide the content
  @Input({ required: true }) set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      // Show the content when condition is false
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      // Hide the content when condition is true
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    console.log('UnlessDirective: Constructor called');
  }

  ngOnInit() {
    console.log('UnlessDirective: ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('UnlessDirective: ngOnChanges called', changes);
  }
}