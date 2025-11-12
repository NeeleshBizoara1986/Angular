import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AppendTextPipe } from './append-text.pipe';
import { ShortNumbersPipe } from './short-numbers.pipe';
interface Employee {
  id: number;
  name: string;
  designation: string;
  department: string;
  email: string;
  salary: number;
}
@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, SlicePipe, CurrencyPipe, DecimalPipe, AppendTextPipe, ShortNumbersPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  title = 'Example of pipe expression';
  strDate = new Date();

  employees: Employee[] = [
    { id: 101, name: 'John Doe', designation: 'Software Engineer', department: 'IT', email: 'john.doe@example.com', salary: 65000 },
    { id: 102, name: 'Jane Smith', designation: 'Project Manager', department: 'Operations', email: 'jane.smith@example.com', salary: 85000 },
    { id: 103, name: 'Robert Brown', designation: 'UI/UX Designer', department: 'Design', email: 'robert.brown@example.com', salary: 55000 }
  ];

  sliceArr = ['Item A', 'Item B', 'Item C', 'Item D', 'Item E'];

  products: { name: string; imageUrl: string }[] = [
    {
      name: 'Mastering CSS with Sass & Bootstrap + Interview Questions',
      imageUrl: 'assets/Html-CSS.jpg',
    },
    {
      name: 'Mastering Angular + Angular 19 + Interview + E-commerce App',
      imageUrl: 'assets/Angular.jpg',
    },
    {
      name: 'JavaScript - Marathon Interview Questions Series',
      imageUrl: 'assets/JS_Course.png',
    },
    {
      name: 'Mastering React With Interview Questions, eStore Project',
      imageUrl: 'assets/React_Course.png',
    },
    {
      name: 'Mastering TypeScript with Marathon Interview Questions',
      imageUrl: 'assets/TypeScript.jpg',
    },
    {
      name: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
      imageUrl: 'assets/RDBMS.png',
    },
    {
      name: 'Mastering Bun - The Modern Fullstack Development',
      imageUrl: 'assets/Bun.jpg',
    },
    {
      name: 'Mastering NestJS',
      imageUrl: 'assets/NestJS.jpg',
    },
  ];

  pgSize: number = 4;
  startIndex: number = 0;
  endIndex: number = this.pgSize;

  previousPage() {
    this.startIndex -= this.pgSize;
    this.endIndex -= this.pgSize
  }
  nextPage() {
    this.startIndex += this.pgSize;
    this.endIndex += this.pgSize
  }



  numbers = [7, 2, 4, 5, 8, 3, 1, 9, 6]
  sortOrder: 'asc' | 'desc' = 'asc';
  showSOrtedList: boolean = false;

  showSorting() {
    this.showSOrtedList = !this.showSOrtedList;
    if(this.showSOrtedList) {
      this.sortOrder = 'desc'
    } else {
      this.sortOrder = 'asc'
    }
    console.log(this.numbers)
    this.numbers = [...this.numbers];
  }
}
