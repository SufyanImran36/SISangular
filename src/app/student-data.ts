export class StudentData {


    constructor(
        public fname: string,
        public mname: string,
        public lname: string, 
        public DateofBirth:string,
        public address: string,
        public city: string,
        public state: string,
        public zip: string,
        public phone1: string,
        public phone1type:string,
        public phone2: string, 
        public phone2type:string,
        public  email: string,
        public specialNote: string,

        //ENROLEMENT DATA
        public id:string,
        public sundaySchool:string,
        public tutionFeeType:string,
        public tutionFee:string,
        public paid:string
        
    ){}




}
