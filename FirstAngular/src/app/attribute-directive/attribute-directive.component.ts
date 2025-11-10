import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  updateStyles: any = 'updateStyles';
  hasText: boolean = false;
  updateStylesMethod(e: any) {
    this.hasText = e.target.value !== '';
  }

  colorMode: string = "lightMode"
  toggelMode() {
    this.colorMode = this.colorMode === "lightMode" ? "darkMode" : "lightMode";
  }


  colcorVal: string = 'red';
  fontSizeVal: string = '14px';
  isItalic: string = 'italic';

  applyVal = {
    color: 'darkblue',
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: 'bold'
  }

  getColor() {
    return this.colorMode === 'lightMode' ? 'orange' : 'green';
  }


  nm: string = '';
  email: string = '';
  emailIsValid: boolean = false;
  formSubmitted: boolean = false;

  validateEmail(e: string): void {
    this.emailIsValid = e.includes('@') && e.includes('.com');
  }

  showMessage() {
    if (this.nm && this.emailIsValid)
      this.formSubmitted = true;
    else this.formSubmitted = false;
  }
}
