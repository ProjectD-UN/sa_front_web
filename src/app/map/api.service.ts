import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	API_URL  =  'http://localhost:8000';
	constructor(private  httpClient:  HttpClient) {}
	initCenters(){
   		return this.http.get('http://35.196.126.118:5000/graphql?query={allCenters{name,address,city,lat,lng}}');
  	}
  

  getCenters(){
	  return  this.httpClient.get('${this.API_URL}/contacts');
	}
}
