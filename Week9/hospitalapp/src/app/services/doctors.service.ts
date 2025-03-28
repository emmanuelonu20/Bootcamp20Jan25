import { Injectable } from '@angular/core';
import { Idoctor } from '../interfaces/idoctor';
import { doctors } from '../data';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private doctors: Idoctor[] = doctors;

  constructor() { }

  getDoctors(){
    return this.doctors;
  }
}
