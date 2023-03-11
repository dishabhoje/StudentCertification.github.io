import { Component, OnInit } from '@angular/core';
import { User1 } from '../user1';
import { Route, Router } from '@angular/router';
import { RegisterationService } from '../registeration.service';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
// gotologin(){
//   throw new Error('Method not imlemented')
// }
user=new User1();
user2=new User();
 
  constructor(private _service:RegisterationService, private _router : Router) { }
  

  ngOnInit(): void {
   
  }
 
 msg=''
  RegisterUser()
  {
     this._service.RegisterUserFromRemote(this.user).subscribe(
      (data)=>{
        console.log("response received");
        this._router.navigate(['/dashboardSuccess']);
      },
      error=>{
        console.log("Exception Occured");
        this.msg="Bad Credentials , Please Enter valid information";
      }

    )
    }

    loginUser()
    {
       this._service.loginUserFromRemote(this.user2).subscribe(
        data=>{ 
          console.log("response received");
        this._router.navigate(['/dashboardSuccess']);
        console.log("response received.....");
      },
        error=>{
          console.log("Exception Occured");
          this.msg="Bad Credenstials ,Please enter valid email and password";
    }
       )
    }
  

}
