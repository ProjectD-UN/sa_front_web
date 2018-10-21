import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsApiService } from './news/news-api.service';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserSuscribingComponent } from './user-suscribing/user-suscribing.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserSuscribingComponent
    MapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhgYCYgXzNrb6T80q_YsDHSBBlhhAev6w'
    })
  ],
  providers: [NewsApiService , GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
