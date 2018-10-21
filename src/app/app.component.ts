import { Component } from '@angular/core';
import { NewsApiService } from './news/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saFrontWeb';
  mNewsletters:Array<any>;
  mTopics:Array<any>;
  

  

  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');         
  }

  ngOnInit() {
      //load articles
      this.newsapi.initArticles().subscribe(data => this.mNewsletters = data['newsletters']);
      //load news sources
      this.newsapi.initSources().subscribe(data=> this.mTopics = data['topics']); 


    }
 

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mNewsletters = data['newsletters']);
  }
}
