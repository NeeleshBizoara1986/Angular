import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-example',
  imports: [],
  templateUrl: './counter-example.component.html',
  styleUrl: './counter-example.component.css'
})
export class CounterExampleComponent {
  count: number = 0;
  counter(type:string) {
    type === 'decrement' ? this.count-- : this.count++;
  }

}
