import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  status: 'active' | 'inactive' | 'pending';
}

interface empInterface { id: number; name: string; department: string; };

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css']
})
export class ControlFlowComponent {
  users: User[] = [
    { id: 1, name: 'John', status: 'active' },
    { id: 2, name: 'Jane', status: 'inactive' },
    { id: 3, name: 'Bob', status: 'pending' }
  ];

  isLoggedIn = true;
  currentUser = { name: 'Admin' };
  selectedStatus: 'active' | 'inactive' | 'pending' = 'active';

  trackByUserId(index: number, user: User): number {
    return user.id;
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  clearUsers() {
    this.users = [];
  }

  restoreUsers() {
    this.users = [
      { id: 1, name: 'John', status: 'active' },
      { id: 2, name: 'Jane', status: 'inactive' },
      { id: 3, name: 'Bob', status: 'pending' }
    ];
  }



  employeeRole: string = '';
  employees = signal<empInterface[]>([
    { id: 1, name: 'Alice', department: 'HR' },
    { id: 2, name: 'Bob', department: 'IT' },
    { id: 3, name: 'Charlie', department: 'Admin' },
    { id: 4, name: 'Alice 1', department: 'Developer' },
    { id: 5, name: 'Bob 1', department: 'Marketing' },
    { id: 6, name: 'Charlie 1', department: 'Developer' },
    { id: 7, name: 'Alice 2', department: 'Analyst' },
    { id: 8, name: 'Bob 2', department: 'Makketing' },
    { id: 9, name: 'Charlie 2', department: 'Developer' }
  ]);
}
