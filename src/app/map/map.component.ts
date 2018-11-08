import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule, GoogleMapsAPIWrapper ,AgmMap, AgmMarker} from '@agm/core';
import { MapService } from './map.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef , NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
  	AgmMarker,
  	AgmMap,
    BrowserModule,
    HttpClientModule,
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
  center: any;
  lng: number = -74.0843007;
  lat: number = 4.6398342;
  zoom: number = 8;
  centers:Array<any>;
  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]
  constructor(private centersApi:MapService) { }
clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
   onClickMe() {
    console.log('click')  }
  ngOnInit() {
    this.centersApi.initCenters().subscribe(data => this.centers = data['data']['allCenters']);
  }
  selectCenter(n: any){
    this.center = n;
    this.lat = n.lat;
    this.lng = n.lng;
    this.zoom = 15;
  }
}

interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
