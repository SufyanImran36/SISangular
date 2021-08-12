import { Injectable } from '@angular/core';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { StudentData } from '../student-data';

@Injectable({
  providedIn: 'root'
})
export class StudentSectionService {



  POSTURL="http://localhost:3000/"
  GETURL=" "

  constructor(private _http: HttpClient) { }


 

  PostReqest(studentdata:StudentData){
   return this._http.post<any>(this.POSTURL,studentdata)
  }

  GetRequest(){
    return this._http.get<any>(this.GETURL)
  }

}
