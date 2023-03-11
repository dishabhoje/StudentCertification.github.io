import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { User1 } from './user1';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  public RegisterUserFromRemote(user :User1){
      return this._http.post("http://localhost:8090/register",user);
  }
}
