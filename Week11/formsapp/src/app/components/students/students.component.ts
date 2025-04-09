import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {

  students!: Istudent[];

  constructor(private studentService: StudentsService) {
    
  }

  ngOnInit(): void {
    this.students = this.studentService.getAllStudents();
  }  

  deleteStudent(studentId: number) {
    //get the array index of the student
    let index = this.students.findIndex(stud => stud.id === studentId);

    //delete student from array
    this.students.splice(index, 1);
  }

}
