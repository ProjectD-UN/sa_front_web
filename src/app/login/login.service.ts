import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  http:  HttpClient) {}
	dologin(name:String, email:String ): Observable<any>{ 
		
   		return  this.http.post<any>('http://35.231.237.201:3002/graphql{ "query": "mutation($login: Login){loginUser(login: $login) {auth,...on Token{token, expiresIn},...on FailedToken{message}}","variables": { "login":{"email":"diefrodriguezcha@unal.edu.co", "password": "apollo"}}} ',{
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
  	}
}



