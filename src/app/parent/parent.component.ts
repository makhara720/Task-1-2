import { Component } from '@angular/core';

interface Task {
  taskName: string;
  dueDate: Date;
  status: 'completed' | 'pending';
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
[x: string]: any;
  tasks: Task[] = [
    { taskName: 'Task 1', dueDate: new Date(Date.now() + 6 * 60 * 60 * 1000), status: 'pending' },
    { taskName: 'Task 2', dueDate: new Date(Date.now() + 48 * 60 * 60 * 1000), status: 'pending' },
    { taskName: 'Task 3', dueDate: new Date(), status: 'completed' },
    { taskName: 'Task 4', dueDate: new Date(), status: 'completed' },
    { taskName: 'Task 5', dueDate: new Date(Date.now()), status: 'pending' }
  ];

  filter: 'all' | 'completed' | 'pending' | 'all' = 'all';

  markTaskAsCompleted(index: number) {
    this.tasks[index].status = 'completed';
  }

  toggleFilter() {
    this.filter = this.filter === 'pending' ? 'completed' : 'pending';
  }
}