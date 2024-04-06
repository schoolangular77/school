import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  userId:any=0;
  constructor(public service:StudentService,private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.queryParams.subscribe(params => {
        this.userId = params['id'];
        console.log(this.userId);
        this.service.getStudentProfile(this.userId);
      });
    }
}
