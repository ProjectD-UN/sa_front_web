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
  constructor() { }

  ngOnInit() {
  }

}
