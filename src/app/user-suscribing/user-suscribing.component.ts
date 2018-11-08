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
    console.log(this.user);
    this.newsapi.postUser(this.user).subscribe(
      (data: User) => {
        console.log(data);
        this.name.reset();
        this.email.reset();
      },
      (error: any) => console.log(error)
    );

    // this.newsapi.postUserTopic(this.userTopic).subscribe(
    //   (data: UserTopic) => {
    //     console.log(data);
    //   },
    //   (error: any) => console.log(error)
    // );
    
    
  }
  
}
