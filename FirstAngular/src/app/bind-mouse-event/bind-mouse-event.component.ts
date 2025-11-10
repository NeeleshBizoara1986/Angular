import { Component } from '@angular/core';

@Component({
  selector: 'app-bind-mouse-event',
  imports: [],
  templateUrl: './bind-mouse-event.component.html',
  styleUrl: './bind-mouse-event.component.css'
})
export class BindMouseEventComponent {
  counterDoubleClick:number = 0;
  counterMouseOver:number = 0;
  incrementDoubleClick() {
    this.counterDoubleClick++;
  }

  incrementMouseOver() {
    this.counterMouseOver++;
  }
}
