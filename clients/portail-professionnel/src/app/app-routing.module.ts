import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { PatientsComponent } from './components/patients/patients.component';
import { VisitesComponent } from './components/visites/visites.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListeVisitesComponent } from './components/liste-visites/liste-visites.component';
import { InterventionsComponent } from './components/interventions/interventions.component';
import { LoginComponent } from './components/login/login.component';
import { PortailComponent } from './components/portail/portail.component';
import { SignupComponent } from './components/signup/signup.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'portail',
    component: PortailComponent,
    children: [
      { path: 'acceuil', component: AcceuilComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'visites', component: VisitesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'liste-visites', component: ListeVisitesComponent },
      { path: 'interventions', component: InterventionsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
