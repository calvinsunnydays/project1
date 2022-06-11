import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppointmentsComponent } from './appointments/appointments.component';

const routes: Routes = [
  {path: 'Appointment', component: AppointmentsComponent},
  {path: 'About Me', component: AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
