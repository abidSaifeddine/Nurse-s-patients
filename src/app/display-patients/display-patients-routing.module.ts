import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayPatientsPage } from './display-patients.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayPatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayPatientsPageRoutingModule {}
