import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students = [
    {id: 1, name: 'John Wick', age: 49},
    {id: 2, name: 'Ben Ken', age: 30},
    {id: 3, name: 'Ross Barkley', age: 26}
  ];

  constructor() { }

  getStudents() {
    return this.students;
  }

  //Create
  //Update
  //Delete
}
