import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(){
    this.userService.loginUser(this.loginForm.value).subscribe({
      next: (result) => {
        localStorage.setItem('auth_token', result.token); //Saves the token to our web browser local storage
        alert('Login was successful');
        this.router.navigate(['/transactions']);
      },
      error: (err) => {
        console.log(err);
        alert('Login failed');
      }
    });
  }
}
