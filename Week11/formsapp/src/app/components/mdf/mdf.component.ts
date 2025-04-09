import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { avoidWord, prohibited } from '../../custom_validations';

@Component({
  selector: 'app-mdf',
  standalone: false,
  templateUrl: './mdf.component.html',
  styleUrl: './mdf.component.css'
})
export class MdfComponent {

  userForm;

  constructor(private fb: FormBuilder){
    this.userForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(3), avoidWord, prohibited(/admin/), prohibited(/hacker/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    });
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

  //Getter methods

  get nameFormControl() {
    return this.userForm.get('name')!; //Name form control
  }

  get emailFormControl() {
    return this.userForm.get('email')!; //Email form control
  }

  get phoneFormControl() {
    return this.userForm.get('phone')!; //Phone form control
  }

}
