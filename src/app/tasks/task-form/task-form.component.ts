import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../task.service';
import { ITaskRequest } from '../typings/task-request.model';
import { ITask } from '../typings/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TaskItemComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {

  taskList: ITask[] = [
    {
      id: 1,
      title: "Sib zamini bekhar zooood!",
      isDone: false
    }
  ];

  fb = inject(FormBuilder);
  taskService = inject(TaskService);

  taskForm = this.fb.group({
    title: ['', Validators.required]
  });

  onSubmitTask() {
    this.taskService.createTask(this.taskForm.value as ITaskRequest)
    .subscribe((res) => console.log(res));

    this.taskForm.reset()
  }

  onDeleteTask(taskId: number) {
    console.log(taskId);
  }

  onEditTask(taskId: number) {
    console.log(taskId);
  }

  onDoneTask(taskId: number) {
    console.log(taskId);
  }

}
