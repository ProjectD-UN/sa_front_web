import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NewsApiService } from '../news/news-api.service';
import {User} from '../models/user.model';
import {UserTopic} from '../models/userTopic.model';
@Component({
  selector: 'app-user-suscribing',
  templateUrl: './user-suscribing.component.html',
  styleUrls: ['./user-suscribing.component.css']
})
export class UserSuscribingComponent implements OnInit {
  @HostBinding('class.hidden')
  name = new FormControl('');
  email = new FormControl('');
  hidden = true;
  @Input() user: User;
  userTopic: UserTopic;
  topic_id: String;
  userID: number;
  constructor(private newsapi:NewsApiService) { }

  ngOnInit() {
  }
  public toggle(){
    this.hidden = !this.hidden;
    console.log('function component toggleHidden called'); 
  }

  suscribeUser() {
    this.user={
      name: this.name.value,
      email: this.email.value
    };
    
    this.newsapi.postUser(this.user).subscribe(data => this.userID = data['id']);

    this.userTopic={
      user_id: this.userID,
      topic_id: 2
    }
    console.log(this.user,this.userTopic);
    

    this.newsapi.postUserTopic(this.userTopic).subscribe(
      (data: UserTopic) => {
        console.log(data);
      },
      (error: any) => console.log(error)
    );
    
    
  }
  
}
