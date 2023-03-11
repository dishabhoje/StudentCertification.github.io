import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegisterationService } from '../registeration.service';
import { User1 } from '../user1';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
gotoregisteration() {
throw new Error('Method not implemented.');
}
  user=new User1();

  msg='';
  constructor(private _service:RegisterationService, private _router : Router) { }
  

  ngOnInit(): void {
  }
  loginUser()
  {
     this._service.loginUserFromRemote(this.user).subscribe(
      data=>{ 
        console.log("response received");
      this._router.navigate(['/loginsuccess'])
    },
      error=>{
        console.log("Exception Occured");
        this.msg="Bad Credenstials ,Please enter valid email and password";
  }
     )
  }
  
//   gotoregisteration(): void
// {
//   this._router.navigate(['/registeration'])
// }
}


