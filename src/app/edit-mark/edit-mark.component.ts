import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
@Component({
  selector: 'app-edit-mark',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit-mark.component.html',
  styleUrl: './edit-mark.component.css'
})
export class EditMarkComponent implements OnInit {
  userId:any=0;
  fullname:string="";
  isGet=true;
  isError=false;
  constructor(public service:StudentService,private activatedRoute: ActivatedRoute){}

    ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params => {
        this.userId = params['id'];
        this.fullname=params['name']
        console.log(this.userId);
        console.log(this.fullname);
        this.service.getMark(this.userId);
      });
    }
  
    submitMark(){
    this.service.editMark().subscribe(
      res=>{
        this.isGet=false;
      console.log("res",res);
      },
      err=>{
        this.isGet=true;
      this.isError=true;
       console.log("err",err);
       
      }
    
    );
  }

  
  }
