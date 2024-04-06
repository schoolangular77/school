import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-student-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css'
})
export class StudentInfoComponent implements OnInit {
  userId:any=0;
  constructor(public service:StudentService,private activatedRoute: ActivatedRoute){}

    ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params => {
        this.userId = params['id'];
        console.log(this.userId);
        this.service.getStudentInfo(this.userId);
        this.service.getStudentImage(this.userId);
      });

    }
  
  
  }