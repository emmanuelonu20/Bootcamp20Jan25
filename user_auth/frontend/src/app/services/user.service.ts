import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(formData: any){
    return this.http.post<Iuser>('http://localhost:3000/auth/register', formData);
  }

  loginUser(formData: any){
    return this.http.post<any>('http://localhost:3000/auth/login', formData);
  }

  getProfile(){
    return this.http.get<Iuser>('http://localhost:3000/user/profile');
  }

  getToken(){
    return localStorage.getItem('auth_token');
  }
}
