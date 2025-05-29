import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;
  profile_image!: File;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService){
    this.registerForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onFileSelected(event: any) {
    this.profile_image = event.target.files[0];
  }

  register(){
    let formData = new FormData();

    if(this.profile_image){
      formData.append('profile_image', this.profile_image)
    }

    for(let key in this.registerForm.value){
      formData.append(key, this.registerForm.value[key]);
    }

    this.userService.createUser(formData).subscribe({
      next: (result) => {
        alert('User was created successfully');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        alert('Registration failed');
      }
    });
  }

}
