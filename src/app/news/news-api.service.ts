import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '80afd1ef2bef403689e74e8f542f0c14';

  constructor(private http:HttpClient) { }
  initSources(){
     return this.http.get('http://localhost:3000/topics/index2');
  }
  initArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
  
} 