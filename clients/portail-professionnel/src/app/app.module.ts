import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { PatientsComponent } from './components/patients/patients.component';
import { VisitesComponent } from './components/visites/visites.component';
import { InterventionsComponent } from './components/interventions/interventions.component';
import { ListeVisitesComponent } from './components/liste-visites/liste-visites.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { PortailComponent } from './components/portail/portail.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    NavComponent,
    ContentComponent,
    AcceuilComponent,
    PatientsComponent,
    VisitesComponent,
    InterventionsComponent,
    ListeVisitesComponent,
    ProfileComponent,
    LoginComponent,
    PortailComponent,
    SignupComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
