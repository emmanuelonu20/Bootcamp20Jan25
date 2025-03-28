import { Component } from '@angular/core';
import { Itask } from '../../interfaces/itask';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tasks!: Itask[];

  constructor(private tasksService: TasksService){
    this.tasksService.getTasks().subscribe((result) => {
      this.tasks = result;
    });
  }

}
