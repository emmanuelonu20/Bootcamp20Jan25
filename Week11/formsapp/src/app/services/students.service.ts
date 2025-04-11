import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/istudent';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  //getting data of all students
  getAllStudents() {
    return this.http.get<Istudent[]>('http://localhost:3000/students');
  }

  //getting data of a single student based on the student ID
  getSingleStudent(id: number) {
    return this.http.get<Istudent>('http://localhost:3000/students/' + id);
  }

  createStudent(formData: any){
    return this.http.post<Istudent>('http://localhost:3000/students', formData);
  }

  removeStudent(id: number) {
    return this.http.delete<Istudent>('http://localhost:3000/students/' + id);
  }
}
