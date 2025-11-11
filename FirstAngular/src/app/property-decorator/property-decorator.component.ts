import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ChildPropBindingComponent } from './child-prop-binding/child-prop-binding.component';

@Component({
  selector: 'app-property-decorator',
  imports: [ChildPropBindingComponent],
  templateUrl: './property-decorator.component.html',
  styleUrl: './property-decorator.component.css'
})
export class PropertyDecoratorComponent {
  
  itemString: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    const newItem = `Item ${this.itemString.length + 1}`;
    this.itemString.push(newItem);
  }

  removeElementFromList(e: number) {
    console.log(e);
    if(e >=0 && e < this.itemString.length){
      this.itemString.splice(e, 1);
    }
  }

  receivedMsgFromChild: string ='';

  receiveChildEvent(message: string) {
    console.log('Received:', message);
    this.receivedMsgFromChild = message;
  }
  
}
