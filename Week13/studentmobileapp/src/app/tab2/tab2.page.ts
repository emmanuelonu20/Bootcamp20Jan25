import { Component } from '@angular/core';
import { Istudent } from '../interfaces/istudent';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  students!: Istudent[];

  constructor(private studentService: StudentsService) {
    
  }

  ngOnInit(): void {
   this.studentService.getAllStudents().subscribe(result => {
    this.students = result;
   });
  }  

  deleteStudent(studentId: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      //get the array index of the student
      let index = this.students.findIndex(stud => stud.id === studentId);

      //delete student from array
      this.students.splice(index, 1);

      //Delete student from Database
      this.studentService.removeStudent(studentId).subscribe(result => {
        console.log('Student was deleted successfully');
      });
    }
  }

}
