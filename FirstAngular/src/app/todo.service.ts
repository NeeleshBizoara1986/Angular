import { computed, Injectable, signal } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // Signal for todos array
  private todos = signal<Todo[]>([
    { id: 1, text: 'Learn Signals', completed: false },
    { id: 2, text: 'Build Demo App', completed: false }
  ]);

  // Computed signal for completed todos count
  completedCount = computed(() => 
    this.todos().filter(todo => todo.completed).length
  );

  // Computed signal for active todos count
  activeCount = computed(() => 
    this.todos().filter(todo => !todo.completed).length
  );

  // Method to get todos
  getTodos() {
    return this.todos.asReadonly();
  }

  // Method to add todo
  addTodo(text: string) {
    this.todos.update(currentTodos => [
      ...currentTodos,
      {
        id: currentTodos.length + 1,
        text,
        completed: false
      }
    ]);
  }

  // Method to toggle todo completion
  toggleTodo(id: number) {
    this.todos.update(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Method to remove todo
  removeTodo(id: number) {
    this.todos.update(currentTodos =>
      currentTodos.filter(todo => todo.id !== id)
    );
  }
}
