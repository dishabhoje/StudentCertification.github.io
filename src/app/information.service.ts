import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Information } from './information';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private _http:HttpClient) { }

  public RegisterUserFromRemote(info :Information){
      return this._http.post("http://localhost:8090/Information",info);
  }
}
