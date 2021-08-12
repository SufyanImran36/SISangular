import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { StudentData } from '../student-data';
import { HttpClient } from '@angular/common/http';
import { StudentSectionService } from './student-section.service';

export class TableDataStudent{
  constructor(
    
    public StudentID:number,
    public StudentName:string,
    public DateofBirth:string,
    public ParentName:string,
    public Address:string



  ){}
}


@Component({
  selector: 'app-student-section',
  templateUrl: './student-section.component.html',
  styleUrls: ['./student-section.component.css']
})
export class StudentSectionComponent implements OnInit {

  public TD:TableDataStudent[] = []

  constructor(private _GetDataService:StudentSectionService,private _PostDataService:StudentSectionService,private httpClient:HttpClient) { }

  ngOnInit(): void {
  }



  // This is the GET REQUEST
  search1ErrMsg=""
  NotFound1 = true;
  getError= 0;
  getTD(){
    this._GetDataService.GetRequest().subscribe(
      response=> this.TD = response,
      error=> {this.getError = error.status

        if(this.getError==409)
        {
          this.search1ErrMsg="Record/s Not Found!"
          this.NotFound1=false;

        }
        else{
          this.NotFound1=true;
        }




      
      
      
      }
     
    )
    
    
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

  



  studentModel = new StudentData("","","","","","State","","","Home","","Home","","None");

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

  this._PostDataService.PostReqest(this.studentModel).subscribe(
    data=>console.log("success!",data),
    error=> {this.errorStatus = error.status

      if(this.errorStatus!=200){
        this.emailErrorMsg ="Email ID is Already Registered!";
       
        
      }
      else{
        form.resetForm();
        this.studentModel = new StudentData("","","","","","State","","","Home","","Home","","None");
      }
    
    
    }
    
  )

  
  
}

onReset(form:NgForm){
  form.resetForm();
  this.studentModel = new StudentData("","","","","","State","","","","","","","None")
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

status4: boolean = false;
changeicon4(){
    this.status4 = !this.status4;       
}

status5: boolean = false;
changeicon5(){
    this.status5 = !this.status5;       
}


}
