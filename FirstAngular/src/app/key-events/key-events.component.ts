import { Component } from '@angular/core';

@Component({
  selector: 'app-key-events',
  imports: [],
  templateUrl: './key-events.component.html',
  styleUrl: './key-events.component.css'
})
export class KeyEventsComponent {
  value: string = '';
  onKeyPress(e: KeyboardEvent) {
    const inputElement = e.target as HTMLInputElement;
    this.value = inputElement.value;
    console.log('Key Pressed:', this.value);
  }

  onKeyDown(e: KeyboardEvent) {
    const inputElement = e.target as HTMLInputElement;
    this.value = inputElement.value;
    console.log('Key Down:', this.value);
  }

  onKeyDownEnter(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.value = inputElement.value;
    console.log('Key Down Enter:', this.value);
  }

  onKeyUp(e: KeyboardEvent) {
    const inputElement = e.target as HTMLInputElement;
    this.value = inputElement.value;
    console.log('Key Up:', this.value);
  }

  onFocus(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.value = inputElement.value;
    console.log('Input Focused:', this.value);
  }

  onSelect(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    this.value = inputElement.value;
    console.log('Input Select:', this.value);
  }

  onInput(e: any) {
    const inputElement = e.target as HTMLInputElement;
    this.value = inputElement.value;
    console.log('Input event:', this.value);
  }

  isShift() {
    console.log('Shift + P event fired:');
  }

  isShiftY(e: any) {
    // console.log('Shift + Y event fired:', e);
    if(e.shiftKey && e.key === 'Y'){
      console.log('Shift + Y event fired:');
    }
    if(e.altKey && e.key === 'n'){
      console.log('Alt + N event fired:');
    }
    if(e.ctrlKey && (e.key === 'M' || e.key === 'm')){
      console.log('Ctrl + M event fired:');
    }
  }
}
