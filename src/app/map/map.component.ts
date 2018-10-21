import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule, GoogleMapsAPIWrapper ,AgmMap, AgmMarker} from '@agm/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef , NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
  	AgmMarker,
  	AgmMap,
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhgYCYgXzNrb6T80q_YsDHSBBlhhAev6w'
    })
  ],
  providers: []
,
  declarations: [ MapComponent ],
  bootstrap: [ MapComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
	title: string = 'Centros de atención';
  lng: number = -74.0843007;
  lat: number = 4.6398342;
  constructor() { }

  ngOnInit() {
  }

}
