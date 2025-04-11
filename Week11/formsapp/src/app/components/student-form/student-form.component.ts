import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  studentForm;

  constructor(private fb: FormBuilder, private studentService: StudentsService){
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      department_id: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const formData = this.studentForm.value;
    this.studentService.createStudent(formData).subscribe(result => {
      console.log(result);
      alert('Student was created successfully');
      this.studentForm.reset();
    });
  }

}
