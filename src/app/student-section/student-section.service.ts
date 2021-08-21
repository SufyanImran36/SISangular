import { Injectable } from '@angular/core';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { StudentData } from '../student-data';

import { StudentEnrollment } from '../student-enrollment';

@Injectable({
  providedIn: 'root'
})
export class StudentSectionService {



  POSTURL="http://localhost:3000/"
  GETURL=" "

  POSTEnrollDataURL=""

  constructor(private _http: HttpClient) { }


 

  PostReqestPersonalInfo(studentdata:StudentData){
   return this._http.post<any>(this.POSTURL,studentdata) //this POST the first section of the student form
  }

  GetRequest(param:string){
    return this._http.get<any>(this.GETURL+param) //This gets data for STUDENT TABLE
  }

  PostRequestEnrollmentInfo(studentEnrollData:StudentEnrollment){
    return this._http.post<any>(this.POSTEnrollDataURL,studentEnrollData) //this POST the enrollment section of the student Section
  }

}
