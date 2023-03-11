import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { Information } from '../information';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  msg=""
  info=new Information();
 
  constructor(private _service:DashboardService, private _router : Router) { }
  ngOnInit(): void {
  }

  addInfo()
  {
    this._service.InformationUserFromRemote(this.info).subscribe(
      (data)=>{
        console.log("response received");
        this._router.navigate(['/loginsuccess']);
      },
      error=>{
        console.log("Exception Occured");
        this.msg="Bad Credentials , Please Enter valid information";
      }

    )
  }

}
