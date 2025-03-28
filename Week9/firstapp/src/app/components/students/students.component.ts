import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  //properties
  students;

  //dependency injection (DI)
  constructor(private studentService: StudentsService){
    this.students = studentService.getStudents();
  }  

}
