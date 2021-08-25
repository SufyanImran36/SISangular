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

  

  // This is the GET REQUEST to FILL TABLE
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
          setTimeout(()=> this.search1ErrMsg="",3000)
          this.NotFound1=false;

        } else{
          this.search1ErrMsg=""
          this.NotFound1=true;
        }
      
      
      }
     
    )
    
  }// FILL TABLE FUNCTION ENDS HERE




  


//********************************************FIRST SECTION OF THE STUDENT FORM! -- PERSONAL INFORMATIOM********************************************
  studentModel = new StudentData("","","",new Date("00-00-0000"),"","","State","","","Home","","Home","","None");


  


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

  isDatenull = true;
  checkdate(){
    if(this.studentModel.DateofBirth == null)
    {
      this.isDatenull = true;
    }else{
      this.isDatenull = false;
    }
  }

stateHasError = true; //BOOL CHECK!
  validateState(value: string){
    if(value==='State' || value==null){
      this.stateHasError= true;

  }else{
    this.stateHasError= false;
  }

}//ENDS validate STATE dropdown -- VALIDATION CHECKS!

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
}//ENDS validate Phone number 1 -- VALIDATION CHECKS!

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
}//ENDS validate Phone number 2 -- VALIDATION CHECKS!



// FUNCTION THAT ALLOWS TOGGLING OF ICONS TO SORT TABLE!
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
// END OF FUNCTION -- FUNCTION THAT ALLOWS TOGGLING OF ICONS TO SORT TABLE!

//********************************************END********************************************





//********************************************ENROLLMENT SECTION OF THE STUDENT FORM! -- ENROLL STATUS INFO********************************************
studentEnrollmentModel = new StudentEnrollment("","Select","Standard Fee","100","false")
  

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



}// ENDS VLAIDAITON OF SUNDAYSCHOOL DROPDOWN

isOpenFee=false; //WHEN SET TRUE -- it ENABLES CUSTOM INPUT OF FEE
InputFeeValue(value:string){

  if(value=="Standard Fee"){
    this.isOpenFee=false;
    this.studentEnrollmentModel.tutionFee = "100";
    
  }
  else{
    this.isOpenFee=true;


  }


}// ENDS FEEE TYPE VALIDATION


//********************************************END********************************************






//********************************************FORM SUBMIT / RESET********************************************
errorStatus = 0;
emailErrorMsg =" "
onSubmit(form:NgForm){

  this.isDatenull = true;


  this._PostDataService.PostRequestEnrollmentInfo(this.studentEnrollmentModel).subscribe(
    data=>{console.log("succeess!",data)},
    error=>{window.alert(error.status+"Cannot POST Enrollment DATA!")}
  )

  this._PostDataService.PostReqestPersonalInfo(this.studentModel).subscribe(
    data=>{console.log("success!",data),form.resetForm()},
    error=> {this.errorStatus = error.status

      if(this.errorStatus!=200){
        this.emailErrorMsg ="Email ID is Already Registered!"
        setTimeout(()=>this.emailErrorMsg ="",5000)
       
        
      }
      else{
        form.resetForm();
        this.studentModel = new StudentData("","","",new Date("00-00-0000"),"","","State","","","Home","","Home","","None");
        this.studentEnrollmentModel = new StudentEnrollment("","Select","","","false")
      }
    
    
    }
    
  )

  

  
  
}//ENDS onSubmit FUNCTION

onReset(form:NgForm){
  this.emailErrorMsg =""
  this.isDatenull = true;
  form.resetForm();
  this.studentModel = new StudentData("","","",new Date("00-00-0000"),"","","State","","","","","","","None");
  this.studentEnrollmentModel = new StudentEnrollment("","Select","","","")
}//END onReset FUNCITON --Resets the whole form when 'Create New Student is Clicked'

}
