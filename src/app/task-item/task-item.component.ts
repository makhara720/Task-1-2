import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() taskName!: string;
  @Input() dueDate!: Date;
  @Input() status!: string;
  @Output() markAsCompleted = new EventEmitter<void>();

  markCompleted() {
    this.markAsCompleted.emit();
  }
}
