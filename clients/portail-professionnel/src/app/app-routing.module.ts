import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { PatientsComponent } from './components/patients/patients.component';
import { VisitesComponent } from './components/visites/visites.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListeVisitesComponent } from './components/liste-visites/liste-visites.component';
import { InterventionsComponent } from './components/interventions/interventions.component';

const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'visites', component: VisitesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'liste-visites', component: ListeVisitesComponent },
  { path: 'interventions', component: InterventionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
