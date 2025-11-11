import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-prop-binding',
  imports: [],
  templateUrl: './child-prop-binding.component.html',
  styleUrl: './child-prop-binding.component.css'
})
export class ChildPropBindingComponent {
  @Input() items: string[] = [];
  @Output() notify = new EventEmitter<string>();
  @Output() itemDeleted = new EventEmitter();

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
}
