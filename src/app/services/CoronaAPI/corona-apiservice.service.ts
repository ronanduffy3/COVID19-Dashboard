import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const latestURL = 'https://coronavirus-tracker-api.herokuapp.com/v2/latest?source=jhu';

@Injectable({
  providedIn: 'root'
})
export class CoronaAPIServiceService {

  latest: any = [];

  constructor(private _http: HttpClient) { }

  getLatest() {
      this._http.get(latestURL);
      this.latest.subscribe(data => JSON.stringify(data))
      return this.latest;
  }


}
