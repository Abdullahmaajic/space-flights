import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  fetchFlights():Observable<any>{
    return  this.http.get<any>("https://api.spacexdata.com/v3/launches?limit=100");
   }

   fetchAll(year: boolean,LaunchS: boolean,LandS: boolean) {
     console.log(year,LaunchS,LandS,17);
     return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+LaunchS+"&land_success="+LandS+"&launch_year="+year);

   }

   fetchLanchSucess(succ: boolean) {
     console.log(succ,"Hi")
     return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+succ);
   }
   fetchLanchSucessAndLandSuccess(val: boolean){
    return  this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success="+val);
  
   }

   

}