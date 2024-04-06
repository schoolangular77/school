import { Component, OnInit  } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Register } from '../register';
import {FormsModule, NgForm} from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  base64:any='';
  file:File|null=null;
  display:boolean=false;
  isGet=true;
  isError=false;
  constructor(public service:StudentService){};
  ngOnInit() {
    this.service.student=new Register();
    this.isGet=true;
  }

  //(change)="handleFileInput($event.target.files)"
  handleFileInput(files:FileList){
    this.display=true
    this.file = files[0]
    const reader = new FileReader()
    reader.readAsDataURL(this.file);
    reader.onload=()=>[
      this.base64 = reader.result
    ];
  }

  submit(){
    //console.log(this.service.student);
  this.service.regStudent(this.file!).subscribe(
    res=>{
      this.isGet=false;
    console.log("res",res);
    console.log("success");
    },
    err=>{
      this.isGet=true;
      this.isError=true;
      console.log(err);
      console.log("failed");
    }
  
  );
}
}
