import { Component, Input } from '@angular/core';
import { Itask } from '../../interfaces/itask';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input() task!: Itask;

}
