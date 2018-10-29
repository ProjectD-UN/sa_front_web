import { Component, Output, EventEmitter } from '@angular/core';
import { MapComponent }      from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule, GoogleMapsAPIWrapper ,AgmMap, AgmMarker} from '@agm/core';
import { NewsApiService } from './news/news-api.service';
import { UserSuscribingComponent } from './user-suscribing/user-suscribing.component'; 
@NgModule({
  imports: [
  AgmMap,
  AgmMarker,
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhgYCYgXzNrb6T80q_YsDHSBBlhhAev6w'
    })
  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' ';
  mNewsletters:Array<any>;
  mTopics:Array<any>;
  @Output() myEvent = new EventEmitter();
  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');         
  }
  
  ngOnInit() {
      //load articles
      this.newsapi.initArticles().subscribe(data => this.mNewsletters = data['newsletters']);
      //load news sources
      this.newsapi.initSources().subscribe(data=> this.mTopics = data['topics']); 

      this.toggleHidden2();
  
  }
  public toggleHidden2(){
    console.log('function component toggleHidden2 called'); 
    this.myEvent.emit(null)
    
  }
  

  
}



const routes: Routes = [
  { path: 'map', component: MapComponent }
];