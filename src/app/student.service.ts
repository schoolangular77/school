import { Injectable } from '@angular/core';
import { Register } from './register';
import { Login } from './login';
import { StudentProfile } from './studentProfile';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from './teacher';
import { Mark } from './mark';



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // url:string="http://localhost:14566/api/AngApi/getStudents";
  // url1:string="http://localhost:14566/api/AngApi/registerStudent";
  // url2:string="http://localhost:14566/api/AngApi/LoginUser";
  // url3:string="http://localhost:14566/api/AngApi/getStudentProfile";
  // url4:string="http://localhost:14566/api/AngApi/getTeacher";
  // url5:string="http://localhost:14566/api/AngApi/getStudentsWithMarks";
  // url6:string="http://localhost:14566/api/AngApi/getStudentInfo";
  // url7:string="http://localhost:14566/api/AngApi/getStudentImage";
  // url8:string="http://localhost:14566/api/AngApi/getMark";
  // url9:string="http://localhost:14566/api/AngApi/editMark";
  url:string="http://schoolangular77-001-site1.ktempurl.com/api/AngApi/getStudents";
  url1:string="http://schoolangular77-001-site1.ktempurl.com/api/AngApi/registerStudent";
  url2:string="http://schoolangular77-001-site1.ktempurl.com/api/AngApi/LoginUser";
  url3:string="http://schoolangular77-001-site1.ktempurl.com/api/AngApi/getStudentProfile";
  url4:string="http://schoolangular77-001-site1.ktempurl.com/api/AngApi/getTeacher";
  url5:string="http://schoolangular77-001-site1.ktempurl.com/api/AngApi/getStudentsWithMarks";
  url6:string="http://schoolangular77-001-site1.ktempurl.com/api/AngApi/getStudentInfo";
  url7:string="http://schoolangular77-001-site1.ktempurl.com/api/AngApi/getStudentImage";
  url8:string="http://schoolangular77-001-site1.ktempurl.com/api/AngApi/getMark";
  url9:string="http://schoolangular77-001-site1.ktempurl.com/api/AngApi/editMark";
  students!: Register[];
  student!:Register;
  login!:Login;
  studentProfile!:StudentProfile;
  studentProfiles!:StudentProfile[];
  teacher!:Teacher;
  image:string="";
  mark!:Mark;
  constructor(private http:HttpClient) { }
 
  getAllStudents(){
    this.http.get(this.url).toPromise().then(
      res=>{
        this.students=res as Register[];
      }
    );
  }

  getStudentsWithMarks(){
    this.http.get(this.url5).toPromise().then(
      res=>{
        console.log("sp",res as StudentProfile[]);
        this.studentProfiles=res as StudentProfile[];
      }
    );
  }

  getStudentProfile(id:number){
    this.http.get(this.url3+"?id="+id).toPromise().then(
      res=>{
        console.log("sp",res as StudentProfile);
        
        this.studentProfile=res as StudentProfile;
      }
    );
  }

  getStudentInfo(id:number){
    this.http.get(this.url6+"?id="+id).toPromise().then(
      res=>{
        console.log("sp",res as Register);
        
        this.student=res as Register;
      }
    );
  }

  getMark(id:number){
    this.http.get(this.url8+"?id="+id).toPromise().then(
      res=>{
        console.log("sp",res as Mark);
        this.mark=res as Mark;
      }
    );
  }

  getStudentImage(id:number){
    this.http.get(this.url7+"?id="+id).toPromise().then(
      res=>{
        console.log("sp",res as string);
        
        this.image=res as string;
      }
    );
  }

  getTeacher(id:number){
    this.http.get(this.url4+"?id="+id).toPromise().then(
      res=>{
        console.log("sp",res as Teacher);
        
        this.teacher=res as Teacher;
      }
    );
  }

  loginStudent(){
    const formData:FormData=new FormData()
    Object.keys(this.login).forEach(key=>{
      formData.append(key,this.login[key as keyof Login] as string)
      console.log(key,"=>",this.login[key as keyof Login] as string)
    })
    formData.append("login",JSON.stringify(this.login))
    console.log(JSON.stringify(this.login))
    return this.http.post(this.url2,formData);
  }

  editMark(){
    const formData:FormData=new FormData()
    Object.keys(this.mark).forEach(key=>{
      formData.append(key,this.mark[key as keyof Mark] as string)
      console.log(key,"=>",this.mark[key as keyof Mark] as string)
    })
    formData.append("mark",JSON.stringify(this.mark))
    return this.http.post(this.url9,formData);
  }


  regStudent(file:File){
    // this.student.file=file;
    // console.log(this.student)
    // this.student.fileName=file.name
    // console.log(this.student)
    
    // return this.http.post(this.url1,this.student);

    const formData:FormData=new FormData()

    Object.keys(this.student).forEach(key=>{
      formData.append(key,this.student[key as keyof Register] as string)
      console.log(key,"=>",this.student[key as keyof Register] as string)
    })
    formData.append("student",JSON.stringify(this.student))
   
    formData.append("Image",file,file.name)
    

    
    return this.http.post(this.url1,formData);
  }
}
