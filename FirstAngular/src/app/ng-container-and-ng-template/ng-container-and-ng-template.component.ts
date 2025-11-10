import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-container-and-ng-template',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-container-and-ng-template.component.html',
  styleUrl: './ng-container-and-ng-template.component.css'
})
export class NgContainerAndNgTemplateComponent {
  subjectList = [{
    id: '101',
    course: 'Angular'
  }, {
    // id: '102',
    course: 'React'
  }, {
    id: '103',
    course: 'Vue'
  }, {
    id: '104',
    course: 'Svelte'
  }];

  newSubjectList = [];
  // newSubjectList = [{
  //   id: '101',
  //   course: 'Angular'
  // }, {
  //   id: '102',
  //   course: 'React'
  // }, {
  //   id: '103',
  //   course: 'Vue'
  // }, {
  //   id: '104',
  //   course: 'Svelte'
  // }];

  user: string = '';
}
