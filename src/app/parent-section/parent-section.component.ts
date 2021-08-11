import { EmptyExpr, ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParentData } from '../parent-data';
import { HttpClient } from '@angular/common/http';
import { ParentSectionService } from './parent-section.service';

export class TableDataParent{
  constructor(
    public parentName:string,
    public address:string,
    public phoneNumber:string
  ){}
}


@Component({
  selector: 'app-parent-section',
  templateUrl: './parent-section.component.html',
  styleUrls: ['./parent-section.component.css']
})


export class ParentSectionComponent implements OnInit {

 public TD:TableDataParent[] = []
  

  constructor(private _GetDataService:ParentSectionService,private _PostDataService:ParentSectionService,private httpClient:HttpClient) { }

  

  ngOnInit(): void {

  }
  
  // This is the GET REQUEST
  search1ErrMsg=""
  NotFound1 = true;
  getError= 0;
  getTD(){
    this._GetDataService.GetRequest().subscribe(
      response=> this.TD = response,
      error=> this.getError = error.status,
     
    )
    
    if(this.getError!=200)
        {
          this.search1ErrMsg="Record/s Not Found!"
          this.NotFound1=false;

        }
        else{
          this.NotFound1=true;
        }
  }

  

// List of all States
  states = [ "AK",
  "AL",
  "AR",
  "AS",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "GU",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VI",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY"];

  phonetypes=["Home","Cell"];



  parentModel = new ParentData("","","","","","State","","","Home","","Home","","true");

  stateHasError = true;

  validateState(value: string){
    if(value==='State' || value==null){
      this.stateHasError= true;

  }else{
    this.stateHasError= false;
  }

}

PN1ErrorMsg=" "
PN1HasError=true;

validatePN1(value:string){

   if(value===null||value===""){
    this.PN1ErrorMsg="is Required!";
    this.PN1HasError=true;
  }
  else if(value.length<10){
    this.PN1ErrorMsg="needs to be atlease 10 Digits long!";
    this.PN1HasError=true;
  }
  else{
    this.PN1HasError=false;

  }
}

PN2ErrorMsg=" "
PN2HasError=true;

validatePN2(value:string){

   if(value===null||value===""){
    this.PN2ErrorMsg="is Required!";
    this.PN2HasError=true;
  }
  else if(value.length<10){
    this.PN2ErrorMsg="needs to be atlease 10 Digits long!";
    this.PN2HasError=true;
  }
  else{
    this.PN2HasError=false;

  }
}




errorStatus = 0;
emailErrorMsg =" "

onSubmit(form:NgForm){

  this._PostDataService.PostReqest(this.parentModel).subscribe(
    data=>console.log("success!",data),
    error=> this.errorStatus = error.status
    
  )

  if(this.errorStatus!=200){
    this.emailErrorMsg ="Email ID is Already Registered!";
   
    
  }
  else{
    form.resetForm();
  }
  
}

status1: boolean = false;
changeicon1(){
    this.status1 = !this.status1;       
}

status2: boolean = false;
changeicon2(){
    this.status2 = !this.status2;       
}

status3: boolean = false;
changeicon3(){
    this.status3 = !this.status3;       
}



}
