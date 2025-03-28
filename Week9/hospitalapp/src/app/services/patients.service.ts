import { Injectable } from '@angular/core';
import { Ipatient } from '../interfaces/ipatient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private patients: Ipatient[] = [
    {name: 'Peter Pan', illness: 'Flu'},
    {name: 'Spiderman', illness: 'Cold'},
  ];

  constructor() { }

  getPatients(){
    return this.patients;
  }
}
