import { Component } from '@angular/core';
import { MapComponent }      from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BACO';
}

const routes: Routes = [
  { path: 'map', component: MapComponent }
];