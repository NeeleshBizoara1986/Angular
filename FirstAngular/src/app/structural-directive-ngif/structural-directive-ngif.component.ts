import { Component } from '@angular/core';
import { CommonModule, NgIf } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ControlFlowComponent } from "../control-flow/control-flow.component";

@Component({
  selector: 'app-structural-directive-ngif',
  imports: [NgIf, CommonModule, FormsModule, ControlFlowComponent],
  templateUrl: './structural-directive-ngif.component.html',
  styleUrl: './structural-directive-ngif.component.css'
})
export class StructuralDirectiveNgifComponent {
  num: number = 0;
  isNumGraterThen10: boolean = this.num > 10;
  displayElement: boolean = false;


  fullStackDev = [
    {
      id: 1,
      name: 'Angular',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'Next.js',
    },
    {
      id: 4,
      name: 'NestJS',
    },
  ];

  trackbyItemId(item: any) {
    return item.id;
  }

  updateItem() {
    this.fullStackDev[1].name = 'Vue.js';
  }
}
