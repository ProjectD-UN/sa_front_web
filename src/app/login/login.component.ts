import { Component, OnInit } from '@angular/core';
import { LoginService }from './login.service';
import { SweetAlertService } from 'ng2-sweetalert2';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SweetAlertService]
})
export class LoginComponent implements OnInit {

  dologin(){
    console.log(this.username , this.pass);
    this.loginservice.dologin(this.username,this.pass).subscribe(data => 
      {
        this.swalService.success("Has iniciado sesion exitosamente!", {title: "Good job!"});
        console.log(data);
        if(data.data.loginUser.auth){
          
          this.swalService.success("Has iniciado sesion exitosamente!", {title: "Muy bien!"});

        }
        if(!data.data.loginUser.auth){
          this.swalService.success(data.data.loginUser.message, {title: "Alerta!"});
        }
        this.data = data['data']
      }
      
      );
    console.log("dd ",this.data);
  }

  username:String;
  pass:String;
  thelogin:any;
  data:any;
  swalService:any;
  static get parameters() {
    return [[SweetAlertService]];
  }
  constructor(private loginservice:LoginService, private swal:any) {
    this.swalService = swal;
   }

  
  ngOnInit() {
    
  }


}
