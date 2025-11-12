import { AfterViewInit, Component, ElementRef, Output, ViewChild, viewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ChildPropBindingComponent } from './child-prop-binding/child-prop-binding.component';
import { HighlightElementDirective } from '../highlight-element.directive';
import { ColorPickerComponent } from "./color-picker/color-picker.component";

@Component({
  selector: 'app-property-decorator',
  imports: [ChildPropBindingComponent, HighlightElementDirective, ColorPickerComponent],
  templateUrl: './property-decorator.component.html',
  styleUrl: './property-decorator.component.css'
})
export class PropertyDecoratorComponent implements AfterViewInit {

  @ViewChild(ChildPropBindingComponent) childComponent?:ChildPropBindingComponent
  @ViewChild('btnIncr', {static: true}) btnRef?: ElementRef<HTMLButtonElement>;
  
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

  incrChildCounter() {
    console.log(this.childComponent);
    this.childComponent?.increment();
  }

  ngAfterViewInit(): void {
    if(this.btnRef?.nativeElement){
      this.btnRef.nativeElement.innerHTML = 'Counter ++';
    }
  }
  
}
