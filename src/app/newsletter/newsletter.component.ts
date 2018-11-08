import { Component, OnInit, Input, HostListener } from '@angular/core';
import { NewsApiService } from '../news/news-api.service';
import { UserSuscribingComponent } from '../user-suscribing/user-suscribing.component'; 

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  @Input() userSuscribing: UserSuscribingComponent;
  @HostListener('clickSub')
  mNewsletters:Array<any>;
  mTopics:Array<any>;
  
  constructor(private newsapi:NewsApiService) { 
    console.log('newsletter component constructor called');  
  }

  ngOnInit() {
    //load articles
    this.newsapi.initArticles().subscribe(data => this.mNewsletters = data['data']['allNewsletters']);
    //this.newsapi.initArticles().subscribe(Mydata => this.mNewsletters = Mydata['newsletters'],);
    //load news sources
    this.newsapi.initSources().subscribe(data=> this.mTopics = data['data']['allTopics']); 

  }

  public clickSub(topic: any){
    this.userSuscribing.toggle();
    this.userSuscribing.topic_id=topic.id;
    console.log('Topic id=',this.userSuscribing.topic_id )
  }

}
