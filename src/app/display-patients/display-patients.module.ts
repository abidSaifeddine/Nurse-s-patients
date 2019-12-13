import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayPatientsPageRoutingModule } from './display-patients-routing.module';

import { DisplayPatientsPage } from './display-patients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayPatientsPageRoutingModule
  ],
  declarations: [DisplayPatientsPage]
})
export class DisplayPatientsPageModule {}
