import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  http:  HttpClient) {}
	dologin(username:String, pass:String ): Observable<any>{ 
		
       return  this.http.post<any>('http://35.196.42.82/graphql',
       {
        "query": "mutation($login: Login){loginUser(login: $login) {auth,...on Token{token, expiresIn},...on FailedToken{message}}}",
        "variables": { "login":{"email":username, "password": pass}}
      }
       ,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
  	}
}



