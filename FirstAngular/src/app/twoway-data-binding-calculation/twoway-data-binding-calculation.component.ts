import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twoway-data-binding-calculation',
  imports: [FormsModule],
  templateUrl: './twoway-data-binding-calculation.component.html',
  styleUrl: './twoway-data-binding-calculation.component.css'
})
export class TwowayDataBindingCalculationComponent {
  quantity:number=1;
  pricePerItem:number=100;

  get totalPrice(): number {
    return this.quantity * this.pricePerItem;
  }
}
