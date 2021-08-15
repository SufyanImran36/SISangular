import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { StudentData } from '../student-data';
import { HttpClient } from '@angular/common/http';
import { StudentSectionService } from './student-section.service';
import { StudentEnrollment } from '../student-enrollment';

export class TableDataStudent{
  constructor(
    
    public id:number,
    public fname:string,
    public mname:string,
    public lname:string,
    public DateofBirth:string,
    public parentname:string, //not sending right now
    public address:string



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
  search1=""
  search1ErrMsg=""
  NotFound1 = true;
  getError= 0;
  getTD(){
    this._GetDataService.GetRequest(this.search1==""?"12332434509873":this.search1).subscribe(
      response=> this.TD = response,
      error=> {this.getError = error.status

        if(this.getError!=200)
        {
          this.search1ErrMsg="Record/s Not Found!";
          setTimeout(()=> this.search1ErrMsg="Record/s Not Found!",3000)
          this.NotFound1=false;

        } else{
          this.search1ErrMsg=""
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

  //Enrolement section dropdown
  SundaySchoolsec=["1A","1B","2A","2B","3A","3B","4A","4B","5A","5B"];







  ssHasError=true;
  validatesundaySchool(value:string){

    if(value=="Select" ||value==null || value=="")
    {
      this.ssHasError=true;

    }
    else{
      this.ssHasError=false;
    }



  }
  isOpenFee=false;

  InputFeeValue(value:string){

    if(value=="Standard Fee"){
      this.isOpenFee=false;
      
    }
    else{
      this.isOpenFee=true;


    }


  }

  



  studentModel = new StudentData("","","","","","","State","","","Home","","Home","","None");
  studentEnrollmentModel = new StudentEnrollment("","Select","Standard Fee","100","false")


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
    data=>{console.log("success!",data), form.resetForm()
  },
    error=> {this.errorStatus = error.status

      if(this.errorStatus!=200){
        this.emailErrorMsg ="Email ID is Already Registered!"
        setTimeout(()=>this.emailErrorMsg ="Email ID is Already Registered!",1000)
       
        
      }
      else{
        form.resetForm();
        this.studentModel = new StudentData("","","","","","","State","","","Home","","Home","","None");
        this.studentEnrollmentModel = new StudentEnrollment("","Select","","","false")
      }
    
    
    }
    
  )

  
  
}

onReset(form:NgForm){
  form.resetForm();
  this.studentModel = new StudentData("","","","","","","State","","","","","","","None");
  this.studentEnrollmentModel = new StudentEnrollment("","Select","","","")
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
