import { Injectable } from '@angular/core';
import {Patient} from '../patient';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {


  patients: Patient[] = [

  ];
  constructor() {
    for (let i = 0 ; i < 2; i++){
      var patient : Patient = {
        "nom": "String"+i,
      "prenom": "pre"+i,
      "Age": 30+i,
      "modeCharge": "String charge",
      "antecedent": "String",
      "tension" : 12+i,
      "poids": 85+i,
      "TypeDouleur": "String",
      "periode": "String",
      "localisation": "String"
      };

      this.patients.push(patient);
    }
  }

  getAll(){
    return this.patients;
  }
  add(patient: Patient){
    this.patients.push(patient);
  }
}
