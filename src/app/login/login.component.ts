import { Component, OnInit } from '@angular/core';
import { LoginService}from './login.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String;
  pass:String;
  thelogin:any;
  constructor(private loginservice:LoginService) { }

  dologin(){
    this.loginservice.dologin(this.username,this.pass).subscribe(data => this.loginservice = data['data']);
  }
  ngOnInit() {
    
  }


}
