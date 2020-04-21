import { Latestfigures } from './../../interfaces/latestfigures';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoronaAPIServiceService {

  private _url : string = "https://coronavirus-tracker-api.herokuapp.com/v2/latest?source=jhu";

  constructor(private _http: HttpClient) { }

  getLatestFigures(){
    return this._http.get<any[]>(this._url);
  }


}
