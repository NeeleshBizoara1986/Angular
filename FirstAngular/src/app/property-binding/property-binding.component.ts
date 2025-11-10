import { Component } from '@angular/core';
// import * from '../../../public/assets/Angular.jpg';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  inputValue: string = 'Initial Value';
  isDisabled: boolean = false;

  // srcImageUrl: string = '../../../public/assets/Angular.jpg';
  srcImageUrl: string = '/assets/Angular.jpg';
  constructor() { }
}
