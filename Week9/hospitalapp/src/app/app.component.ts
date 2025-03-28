import { Component } from '@angular/core';
import { DoctorsService } from './services/doctors.service';
import { PatientsService } from './services/patients.service';

import { Ipatient } from './interfaces/ipatient';
import { Idoctor } from './interfaces/idoctor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  //properties
  doctors: Idoctor[];
  patients: Ipatient[];

  constructor(private doctorService: DoctorsService, private patientService: PatientsService) {
    this.doctors = doctorService.getDoctors();
    this.patients = patientService.getPatients();
  }
  
}
