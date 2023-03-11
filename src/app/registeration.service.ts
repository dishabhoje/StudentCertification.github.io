import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User1 } from './user1';
import {HttpClient} from '@angular/common/http'
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
 

 
  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user2:User){
   return this._http.post("http://localhost:8080/login",user2)
  }

  RegisterUserFromRemote(user: User1) {
    return this._http.post("http://localhost:8080/register",user);
  }
}
