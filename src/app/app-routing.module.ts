import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent }      from './map/map.component';
import { HomeComponent }      from './home/home.component';
import { LoginComponent }      from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'map', component: MapComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,RouterModule ,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }
