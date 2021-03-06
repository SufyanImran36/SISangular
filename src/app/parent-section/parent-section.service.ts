import { Injectable } from '@angular/core';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ParentData } from '../parent-data';
import { ParentSectionComponent } from './parent-section.component';


@Injectable({
  providedIn: 'root'
})
export class ParentSectionService {

  POSTURL="http://35.165.88.243:8080/parent/insert-parent"
  GETURL="http://35.165.88.243:8080/parent/insert-parent"

  constructor(private _http: HttpClient) { }

   



  PostReqest(parentdata:ParentData){
   return this._http.post<any>(this.POSTURL,parentdata)
  }

  GetRequest(param:string){
    return this._http.get<any>(this.GETURL+param)
  }

  




  
}
