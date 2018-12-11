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
  data:any;
  constructor(private loginservice:LoginService) { }

  dologin(){
    console.log(this.username , this.pass);
    this.loginservice.dologin(this.username,this.pass).subscribe(data => 
      {
        console.log(data);
        if(data.data.loginUser.auth){
          alert("Has iniciado sesion exitosamente!")
        }
        if(!data.data.loginUser.auth){
          alert(data.data.loginUser.message)
        }
        this.data = data['data']
      }
      
      );
    console.log("dd ",this.data);
  }
  ngOnInit() {
    
  }


}
