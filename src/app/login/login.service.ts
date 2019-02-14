import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private  http:  HttpClient) {}
	dologin(username:String, pass:String ): Observable<any>{ 
		
       return  this.http.post<any>('http://34.73.103.246/graphql',
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



