import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from '../login';
import {FormsModule, NgForm} from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit {
  base:any="";
  isFailed:any=false;
  message:string="";
  EMAIL_REGEXP:any = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  constructor(public service:StudentService, private _router: Router){};
  ngOnInit() {
    this.service.login=new Login();
    this.message="";
  }


  submit(){
    console.log("ASdsad",this.service.login.email);
    
    if(this.service.login.usertype==""){
     this.isFailed=true;
     this.message="حدد نوع المستخدم";
    }else if(this.service.login.email==""){
      this.isFailed=true;
      this.message="حقل الإيميل مطلوب";
    }else if(!this.EMAIL_REGEXP.test(this.service.login.email)){
      this.isFailed=true;
      this.message="أدخل إيميل صحيح";
    }else if(this.service.login.password==""){
      this.isFailed=true;
      this.message="حقل كلمة المرور مطلوب";
    }else if(this.service.login.password.length<3){
      this.isFailed=true;
      this.message=" كلمة المرور 3 محارف على الأقل";
    }else{
    this.service.loginStudent().subscribe(
    res=>{
      this.base=res as object;
      if(this.base["type"]=="student"){
        console.log("student");
        this._router.navigateByUrl('student?id='+this.base["id"]);
      }else if(this.base["type"]=="teacher"){
        this._router.navigateByUrl('teacher?id='+this.base["id"]);
        console.log("teacher");
      }else if(this.base["type"]=="failed"){
        this.isFailed=true;
        this.message="معلومات تسجيل الدخول غير صحيحة";
        console.log("failed");
      }else{
        console.log("error");
      }
    },
    err=>{
      console.log(err.status);
    }
  
  );
}
}

}
