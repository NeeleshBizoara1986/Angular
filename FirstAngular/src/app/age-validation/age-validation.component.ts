import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-age-validation',
  imports: [FormsModule, CommonModule],
  templateUrl: './age-validation.component.html',
  styleUrl: './age-validation.component.css'
})
export class AgeValidationComponent {
  age: number = 0;
  isEligible: boolean  = false;
  checkEligiblity() {
    this.isEligible = this.age >= 18;
  }
}
