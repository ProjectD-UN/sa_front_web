import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  
  constructor(private  httpClient:  HttpClient) {}
	initCenters(){
		var data = this.httpClient.get('http://35.196.126.118:5000/graphql?query={allCenters{name,address,city,lat,lng}}');
   		return  this.httpClient.get('http://35.196.126.118:5000/graphql?query={allCenters{name,address,city,lat,lng}}');
  	}
}
