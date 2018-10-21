import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent }      from './map/map.component';
import { HomeComponent }      from './home/home.component';

const routes: Routes = [
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
