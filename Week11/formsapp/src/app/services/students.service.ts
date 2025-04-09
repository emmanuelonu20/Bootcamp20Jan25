import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Istudent[] = [
    {id: 1, name: 'John Wick', department: 'Computer Science', age: 23},
    {id: 2, name: 'Sandra Bullock', department: 'Music', age: 30},
    {id: 3, name: 'Peter Pan', department: 'Economics', age: 20},
  ];

  constructor() { }

  //getting data of all students
  getAllStudents() {
    return this.students;
  }

  //getting data of a single student based on the student ID
  getSingleStudent(id: number) {
    return this.students.find(stud => stud.id === id);
  }
}
