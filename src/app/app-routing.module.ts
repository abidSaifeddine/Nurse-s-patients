import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'add-patient',
    loadChildren: () => import('./add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'display-patients',
    loadChildren: () => import('./display-patients/display-patients.module').then( m => m.DisplayPatientsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
