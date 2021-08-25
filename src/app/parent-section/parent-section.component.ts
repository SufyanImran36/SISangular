import { EmptyExpr, ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParentData } from '../parent-data';
import { HttpClient } from '@angular/common/http';
import { ParentSectionService } from './parent-section.service';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { NgxPaginationModule } from 'ngx-pagination';




export class TableDataParent{
  constructor(
    public fname:string,
    public mname:string,
    public lname:string,
    public address:string,
    public phone1:string
    
  ){}
}


@Component({
  selector: 'app-parent-section',
  templateUrl: './parent-section.component.html',
  styleUrls: ['./parent-section.component.css']
})


export class ParentSectionComponent implements OnInit {

  


 public TD:TableDataParent[] = [

  // {
  //   "fname":"Aiden",
  //   "mname":"cat",
  //    "lname":"niga2.0",
  //    "address":"a",
  //    "phone1":"23423432"
  // },
  // {
  //   "fname":"Aiden",
  //   "mname":"sob",
  //    "lname":"cello.0",
  //    "address":"c",
  //    "phone1":"66669999"
  // },
  // {
  //   "fname":"Aiden",
  //   "mname":"alan",
  //    "lname":"cello.0",
  //    "address":"d",
  //    "phone1":"66669999"
  // },
  // {
  //   "fname":"BOB",
  //   "mname":"alan",
  //    "lname":"cello.0",
  //    "address":"b",
  //    "phone1":"66669999"
  // },
  // {
  //   "fname":"ziga",
  //   "mname":"alan",
  //    "lname":"cello.0",
  //    "address":"e",
  //    "phone1":"66669999"
  // }

 ]

 key:string="fname"
 reverse:boolean = false;
 sortname(key:string){
   this.key= key;
   this.reverse = !this.reverse;
 }



 key2:string="address"
 reverse2:boolean = false;
sortaddress(key2:string){
  this.key2= key2;
  this.reverse2 = !this.reverse2;
}

key3:string="phone1"
 reverse3:boolean = false;
 sortnumber(key3:string){
  this.key3= key3;
  this.reverse3 = !this.reverse3;
}





 


 
  

  constructor(private _GetDataService:ParentSectionService,private _PostDataService:ParentSectionService,private httpClient:HttpClient) { }

  ngOnInit(): void {

  }

  
 

  
  // This is the GET REQUEST
  // This is the GET REQUEST

 
  search1="";
  search1ErrMsg=""
  NotFound1 = true;
  getError= 0;
  getTD(){
    this._GetDataService.GetRequest(this.search1==""?"12321312":this.search1).subscribe(
      response=> this.TD = response,
      error=> {this.getError = error.status;

        if(this.getError!=200)
        {
          this.search1ErrMsg="Record/s Not Found!";
          setTimeout(()=> this.search1ErrMsg="",3000)
          this.NotFound1=false;

        }else{
          this.search1ErrMsg="";
          this.NotFound1=true;
        }
      
      },

      
     
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


  parentModel = new ParentData("","","","","","","State","","","1","","1","","false");

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
    data=>{console.log("success!",data),form.resetForm()
  },
    error=> {this.errorStatus = error.status

      if(this.errorStatus==409){
        this.emailErrorMsg ="Email ID is Already Registered!"
        setTimeout(()=>this.emailErrorMsg ="",1000)
       
        
      }
      else{
        this.emailErrorMsg ="";
        
        form.resetForm();
        this.parentModel = new ParentData("","","","","","","State","","","","","","","false");
      
      }
    
    
    
    }
    
  )

  
  
}

onReset(form:NgForm){
  form.resetForm();
  this.parentModel = new ParentData("","","","","","","State","","","","","","","");
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
