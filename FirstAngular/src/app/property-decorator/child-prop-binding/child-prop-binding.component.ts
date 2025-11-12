import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-prop-binding',
  imports: [],
  templateUrl: './child-prop-binding.component.html',
  styleUrl: './child-prop-binding.component.css'
})
export class ChildPropBindingComponent implements AfterContentInit{
  @Input() items: string[] = [];
  @Output() notify = new EventEmitter<string>();
  @Output() itemDeleted = new EventEmitter();
  @ContentChild('sectionContent') contentRef?: ElementRef; 

  emitEvent() {
    this.notify.emit('Hello from child! using @Output property Decorator');
  }

  deleteItems(index: number) {
    this.itemDeleted.emit(index)
  }

  count: number = 0;

  increment() {
    this.count++;
  }

  ngAfterContentInit(): void {
    if(this.contentRef?.nativeElement){
      this.contentRef.nativeElement.style.color = '#b2b2b2ff';
      console.log(this.contentRef.nativeElement.child)
    }
  }
}
