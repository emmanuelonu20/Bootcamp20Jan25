import { Component } from '@angular/core';
import { Idepartment } from '../interfaces/idepartment';
import { StudentsService } from '../services/students.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  studentForm;
  isEdit: boolean = false;
  editStudentId!: number;
  departments!: Idepartment[];

  constructor(private fb: FormBuilder, private studentService: StudentsService, private route: ActivatedRoute, private deptService: DepartmentsService){
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      department_id: [0, [Validators.required]],
      age: [0, [Validators.required]],
    });

    //Get all departments
    this.deptService.getAllDepartments().subscribe(result => {
      this.departments = result;
    });

    //Retrieve student ID from URL
    let studentId: any = this.route.snapshot.paramMap.get('student_id');

    //Checking if to enter edit mode
    if (studentId) {
      this.editStudentId = parseInt(studentId); //convert student ID to number
      this.isEdit = true;

      //retrieve student data from backend
      this.studentService.getSingleStudent(this.editStudentId).subscribe(result => {
        this.studentForm.patchValue(result); //populate form with student data
      });
    }   
  }

  onSubmit() {
    if (this.isEdit) {
      this.updateStudent();
    } else {
      this.createStudent();
    }
  }

  createStudent(){
    const formData = this.studentForm.value;
    this.studentService.createStudent(formData).subscribe(result => {
      console.log(result);
      alert('Student was created successfully');
      this.studentForm.reset();
    });
  }

  updateStudent(){
    const formData = this.studentForm.value;
    this.studentService.updateStudent(this.editStudentId, formData).subscribe(result => {
      console.log(result);
      alert('Student was updated successfully');
    });
  }

}
