import { Component, OnInit } from '@angular/core';
import {Patient} from '../patient';
import {PatientServiceService} from '../Services/patient-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {
patient = new Patient();
  constructor(private service : PatientServiceService,
              private router: Router
              ) { }

  ngOnInit() {
  }
add(){
    this.service.add(this.patient);
    this.router.navigate(['/display-patients']);
    console.log(this.patient);
}
}
