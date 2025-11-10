import { Component } from '@angular/core';

@Component({
  selector: 'app-down-up-key-counter',
  imports: [],
  templateUrl: './down-up-key-counter.component.html',
  styleUrl: './down-up-key-counter.component.css'
})
export class DownUpKeyCounterComponent {
  counter: number = 0;
  onKeyDown(event: KeyboardEvent) {
    if(event.key === 'ArrowUp') {
      this.counter++;
    } else if(event.key === 'ArrowDown') {
      this.counter--;
    }
  }
}
