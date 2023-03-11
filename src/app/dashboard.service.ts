import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Information } from './information';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }

  InformationUserFromRemote(info: Information) {
    return this._http.post("http://localhost:8090/Information",info);
  }
}
