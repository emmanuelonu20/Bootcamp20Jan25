import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idepartment } from '../interfaces/idepartment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http: HttpClient) { }

  getAllDepartments(){
    return this.http.get<Idepartment[]>('http://localhost:3000/departments');
  }
}
