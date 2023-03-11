import { Component } from '@angular/core';
import { RegisterationService } from './registeration.service';
import { User1 } from './user1';
import { Route, Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';
//import { Component, OnInit } from '@angular/core';
// import { User1 } from '../user1';
// import { Route, Router } from '@angular/router';
// import { RegisterationService } from '../registeration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngregisteration';

// user=new User1();
// user2=new User();
//   msg='';
//   constructor(private _service:RegisterationService, private _router : Router) { }


  ngOnInit(): void {
  }
 


  // RegisterUser()
  // {
  //    this._service.RegisterUserFromRemote(this.user).subscribe(
  //     (data)=>{
  //       console.log("response received");
  //       this._router.navigate(['/dashboardSuccess']);
  //     },
  //     error=>{
  //       console.log("Exception Occured");
  //       this.msg="Bad Credentials , Please Enter valid information";
  //     }

  //   )
  //   }

  //   loginUser()
  //   {
  //      this._service.loginUserFromRemote(this.user2).subscribe(
  //       data=>{ 
  //         console.log("response received");
  //       this._router.navigate(['/registeration']);
  //       console.log("response received.....");
  //     },
  //       error=>{
  //         console.log("Exception Occured");
  //         this.msg="Bad Credenstials ,Please enter valid email and password";
  //   }
  //      )
  //   }
}
