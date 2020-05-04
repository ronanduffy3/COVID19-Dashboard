import { Latestfigures } from "./../../interfaces/latestfigures";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APICountries } from "src/app/interfaces/apicountries";

@Injectable({
  providedIn: "root",
})
export class CoronaAPIServiceService {
  private _url: string =
    "https://coronavirus-tracker-api.herokuapp.com/v2/latest?source=jhu";

  private _url2: string = "https://coronavirus-tracker-api.herokuapp.com/v2/locations/";
  private _url3: string = "?source=jhu&timelines=false";



  constructor(private _http: HttpClient) {}

  getLatestFigures() {
    return this._http.get<any[]>(this._url);
  }

  public getCountryFigures(countryId: string) {
    return this._http.get<any[]>(this._url2 + countryId + this._url3); 
  }

}
