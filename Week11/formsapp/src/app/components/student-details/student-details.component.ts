import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-student-details',
  standalone: false,
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  student!: Istudent;

  constructor(private route: ActivatedRoute, private studentService: StudentsService) {
    let studentId: any = this.route.snapshot.paramMap.get('student_id');
    studentId = parseInt(studentId);
    
    this.studentService.getSingleStudent(studentId).subscribe(result => {
      this.student = result;
    });
  }

}
