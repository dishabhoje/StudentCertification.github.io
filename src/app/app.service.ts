import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User1 } from './user1';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http:HttpClient) { }

  public RegisterUserFromRemote(user :User1){
      return this._http.post("http://localhost:8090/register",user);
  }
}
