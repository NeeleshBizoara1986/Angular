import { Component, ChangeDetectionStrategy, ChangeDetectorRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-change-detection-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="default-strategy">
        <h2>Default Strategy</h2>
        <p>Updates: {{ defaultUpdateCount() }}</p>
        <div class="task-list">
          @for (task of defaultTasks(); track task.id) {
            <div class="task">
              <span>{{ task.title }}</span>
              <button (click)="toggleDefaultTask(task.id)">
                {{ task.completed ? '✓' : '○' }}
              </button>
            </div>
          }
        </div>
        <button (click)="addDefaultTask()">Add Task</button>
      </div>

      <div class="onpush-strategy">
        <h2>OnPush Strategy</h2>
        <p>Updates: {{ onPushUpdateCount() }}</p>
        <div class="task-list">
          @for (task of onPushTasks(); track task.id) {
            <div class="task">
              <span>{{ task.title }}</span>
              <button (click)="toggleOnPushTask(task.id)">
                {{ task.completed ? '✓' : '○' }}
              </button>
            </div>
          }
        </div>
        <button (click)="addOnPushTask()">Add Task</button>
        <button (click)="mutateOnPushTask()">Mutate Task (No Update)</button>
        <button (click)="forceUpdate()">Force Update</button>
      </div>

      <div class="explanation">
        <h3>Change Detection Explanation</h3>
        <ul>
          <li>Default: Re-renders on any event in the application</li>
          <li>OnPush: Only updates when:</li>
          <ul>
            <li>Input properties change (reference change)</li>
            <li>Event handler within the component triggers</li>
            <li>Async pipe emits new value</li>
            <li>Manual change detection trigger</li>
          </ul>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .default-strategy, .onpush-strategy {
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background: #f8f9fa;
    }

    .task-list {
      margin: 15px 0;
    }

    .task {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px;
      margin: 5px 0;
      background: white;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    button {
      padding: 6px 12px;
      margin: 5px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background: #0056b3;
    }

    .explanation {
      grid-column: 1 / -1;
      padding: 20px;
      background: #e9ecef;
      border-radius: 8px;
    }

    .explanation ul {
      margin: 10px 0;
    }

    .explanation li {
      margin: 5px 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush  // Enable OnPush strategy
})
export class ChangeDetectionDemoComponent {
  // Default Strategy Tasks
  defaultTasks = signal<Task[]>([
    { id: 1, title: 'Default Task 1', completed: false }
  ]);
  defaultUpdateCount = signal(0);

  // OnPush Strategy Tasks
  onPushTasks = signal<Task[]>([
    { id: 1, title: 'OnPush Task 1', completed: false }
  ]);
  onPushUpdateCount = signal(0);

  constructor(private cdr: ChangeDetectorRef) {
    // Monitor default strategy updates
    setInterval(() => {
      this.defaultUpdateCount.update(count => count + 1);
    }, 1000);

    // Monitor OnPush strategy updates
    setInterval(() => {
      this.onPushUpdateCount.update(count => count + 1);
      // OnPush won't update unless we explicitly mark for check
      this.cdr.markForCheck();
    }, 1000);
  }

  // Default Strategy Methods
  addDefaultTask() {
    this.defaultTasks.update(tasks => [
      ...tasks,
      {
        id: tasks.length + 1,
        title: `Default Task ${tasks.length + 1}`,
        completed: false
      }
    ]);
  }

  toggleDefaultTask(id: number) {
    this.defaultTasks.update(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // OnPush Strategy Methods
  addOnPushTask() {
    this.onPushTasks.update(tasks => [
      ...tasks,
      {
        id: tasks.length + 1,
        title: `OnPush Task ${tasks.length + 1}`,
        completed: false
      }
    ]);
  }

  toggleOnPushTask(id: number) {
    this.onPushTasks.update(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  // Demonstrate mutation (won't trigger update in OnPush)
  mutateOnPushTask() {
    const tasks = this.onPushTasks();
    if (tasks.length > 0) {
      tasks[0].title = 'Mutated Title (Won\'t Update)';
      // No update because we mutated the object without creating a new reference
    }
  }

  // Force update through ChangeDetectorRef
  forceUpdate() {
    this.cdr.detectChanges();
  }
}