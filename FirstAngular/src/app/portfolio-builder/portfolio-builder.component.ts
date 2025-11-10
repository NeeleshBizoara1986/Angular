import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio-builder',
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio-builder.component.html',
  styleUrl: './portfolio-builder.component.css'
})
export class PortfolioBuilderComponent {
  nm = '';
  em = '';
  ph = '';
  add = '';
  submitted: boolean = false;
  showHeading: boolean = true;
  qualification = [{ school: '', degree: '', year: '' }];

  addQualification() {
    this.qualification.push({ school: '', degree: '', year: '' });
  }

  formSubmit() {
    this.submitted = true;
    this.showHeading = false;
  }

  formEdit() {
    this.submitted = false;
    this.showHeading = true;
  }
}
