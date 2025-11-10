import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-signal-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h2>Todo List with Signals</h2>
      
      <!-- Stats Section -->
      <div class="stats">
        <span>Total: {{ totalCount() }}</span>
        <span>Active: {{ activeCount() }}</span>
        <span>Completed: {{ completedCount() }}</span>
      </div>

      <!-- Add Todo Form -->
      <div class="add-todo">
        <input
          #todoInput
          type="text"
          [ngModel]="newTodoText()"
          (ngModelChange)="updateNewTodoText($event)"
          placeholder="What needs to be done?"
          (keyup.enter)="addTodo()"
        >
        <button (click)="addTodo()">Add</button>
      </div>

      <!-- Todo List -->
      <ul class="todo-list">
        @for (todo of todos(); track todo.id) {
          <li [class.completed]="todo.completed">
            <input
              type="checkbox"
              [checked]="todo.completed"
              (change)="toggleTodo(todo.id)"
            >
            <span>{{ todo.text }}</span>
            <button (click)="removeTodo(todo.id)">❌</button>
          </li>
        }
      </ul>

      <!-- Filter Buttons -->
      <div class="filters">
        <button 
          [class.active]="currentFilter() === 'all'"
          (click)="setFilter('all')"
        >All</button>
        <button 
          [class.active]="currentFilter() === 'active'"
          (click)="setFilter('active')"
        >Active</button>
        <button 
          [class.active]="currentFilter() === 'completed'"
          (click)="setFilter('completed')"
          >Completed</button>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .stats {
      display: flex;
      justify-content: space-around;
      margin-bottom: 20px;
      padding: 10px;
      background: #f5f5f5;
      border-radius: 4px;
    }

    .add-todo {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    .add-todo input {
      flex: 1;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .todo-list {
      list-style: none;
      padding: 0;
    }

    .todo-list li {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      border-bottom: 1px solid #eee;
    }

    .todo-list li.completed span {
      text-decoration: line-through;
      color: #888;
    }

    .filters {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }

    button {
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      background: #007bff;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background: #0056b3;
    }

    button.active {
      background: #0056b3;
    }
  `]
})
export class SignalTodoComponent {

  // constructor(private todoService: TodoService) {}
  private todoService = inject(TodoService);

  // Local UI signals
  newTodoText = signal('');
  currentFilter = signal<'all' | 'active' | 'completed'>('all');

  // Service signals
  todos = this.todoService.getTodos();
  activeCount = this.todoService.activeCount;
  completedCount = this.todoService.completedCount;

  // Computed values
  totalCount = computed(() => this.todos().length);
  
  filteredTodos = computed(() => {
    const filter = this.currentFilter();
    const todos = this.todos();

    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  });

  // constructor(private todoService: TodoService) {}

  // UI Methods
  updateNewTodoText(text: string) {
    this.newTodoText.set(text);
  }

  addTodo() {
    const text = this.newTodoText().trim();
    if (text) {
      this.todoService.addTodo(text);
      this.newTodoText.set('');
    }
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id);
  }

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.currentFilter.set(filter);
  }
}
