import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-suscribing',
  templateUrl: './user-suscribing.component.html',
  styleUrls: ['./user-suscribing.component.css']
})
export class UserSuscribingComponent implements OnInit {
  name = new FormControl('');
  email = new FormControl('');
  hidden = true;
  
  constructor() { }

  ngOnInit() {
  }
  public toggleHidden(){
    this.hidden = !this.hidden;
    console.log('function component toggleHidden called'); 
  }
}
