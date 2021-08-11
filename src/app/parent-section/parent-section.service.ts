import { Injectable } from '@angular/core';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ParentData } from '../parent-data';


@Injectable({
  providedIn: 'root'
})
export class ParentSectionService {

  POSTURL=" "
  GETURL=" "

  constructor(private _http: HttpClient) { }


 

  PostReqest(parentdata:ParentData){
   return this._http.post<any>(this.POSTURL,parentdata)
  }

  GetRequest(){
    return this._http.get<any>(this.GETURL)
  }

  




  
}
