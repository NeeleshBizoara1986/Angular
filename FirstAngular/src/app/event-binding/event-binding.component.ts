import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  message: string = 'Clicked the Button';
  onClickMe(msg: string) {
    this.message = msg;
  }
}
