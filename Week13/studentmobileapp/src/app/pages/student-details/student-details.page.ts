import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Istudent } from 'src/app/interfaces/istudent';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.page.html',
  styleUrls: ['./student-details.page.scss'],
  standalone: false
})
export class StudentDetailsPage implements OnInit {

  student!: Istudent;

  constructor(private route: ActivatedRoute, private studentService: StudentsService) {
    let studentId: any = this.route.snapshot.paramMap.get('student_id');
    studentId = parseInt(studentId);
    
    this.studentService.getSingleStudent(studentId).subscribe(result => {
      this.student = result;
    });
  }

  ngOnInit() {
  }

}
