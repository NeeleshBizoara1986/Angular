import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twoway-data-binding',
  imports: [FormsModule],
  templateUrl: './twoway-data-binding.component.html',
  styleUrl: './twoway-data-binding.component.css'
})
export class TwowayDataBindingComponent {
  inputValue: string = '';
  dynamicValue: string = '';

  show() {
    this.dynamicValue = this.inputValue;
  }
}
