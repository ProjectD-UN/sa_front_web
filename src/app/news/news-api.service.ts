import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {User} from '../models/user.model';
import {UserTopic} from '../models/userTopic.model';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '80afd1ef2bef403689e74e8f542f0c14';

  constructor(private http:HttpClient) { }
  initSources(){
    return this.http.get('http://35.196.126.118:5000/graphql?query={allTopics{name,img_id}}');
  }
  initArticles(){
    //return this.http.get('http://35.231.237.201:3002/newsletters/index2');
    return this.http.get('http://35.196.126.118:5000/graphql?query={allNewsletters{title,description,url_to_image,topics{name,img_id}}}');
  }
  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
  
  postUser(user: User): Observable<User> {
    
    return this.http.post<User>('http://35.231.237.201:3002/graphql{"query": "mutation($user: User!){saveUser(user: $user) {id, name, email}}","variables": { "user":{"email": '+user.email+', "name": '+user.name+' } }} ',user,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    // .pipe(
    //   catchError(this.handleError('postUser', user))
    // );
  }
  postUserTopic(userTopic: UserTopic): Observable<UserTopic> {
    return this.http.post<UserTopic>('http://35.231.237.201:3002/user_topics',userTopic,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
} 