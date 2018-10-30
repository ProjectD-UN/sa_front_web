import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  
  constructor() { }

  ngOnInit() {
  }
  public toggle(){
    this.hidden = !this.hidden;
    console.log('function component toggleHidden called'); 
  }
}
