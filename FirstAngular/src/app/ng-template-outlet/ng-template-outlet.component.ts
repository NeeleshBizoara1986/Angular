import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  imports: [CommonModule],
  templateUrl: './ng-template-outlet.component.html',
  styleUrl: './ng-template-outlet.component.css'
})
export class NgTemplateOutletComponent {
  a: number = 5;
  b: number = 10;
  calc(): number {
    return this.a + this.b;
  }

  showDetails = {
    name: 'Angular',
    version: '12.0',
    description: 'A platform for building mobile and desktop web applications.'
  }

  employees = [
    { id: 1, name: 'John Doe', position: 'Developer' },
    { id: 2, name: 'Jane Smith', position: 'Designer' },
    { id: 3, name: 'Sam Johnson', position: 'Manager' }
  ];

  
trackByEmployee(index: number, employee: any): number {
    return employee.id;
}

}
