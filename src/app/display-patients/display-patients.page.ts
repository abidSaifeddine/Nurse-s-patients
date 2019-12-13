import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from '../../app/Services/patient-service.service';
import {Patient} from '../patient';
@Component({
  selector: 'app-display-patients',
  templateUrl: './display-patients.page.html',
  styleUrls: ['./display-patients.page.scss'],
})
export class DisplayPatientsPage implements OnInit {
patients: Patient[] = [];
  constructor(private service: PatientServiceService) { }

  ngOnInit() {
    this.patients = this.service.patients;
    console.log(this.patients)
  }

}
