import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, ActivatedRoute, Params,RouterOutlet,RouterModule} from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {
  userId:any=0;

  constructor(public service:StudentService,private activatedRoute: ActivatedRoute, private _router: Router) {}
  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.activatedRoute.queryParams.subscribe(params => {
        this.userId = params['id'];
        console.log(this.userId);
        this.service.getTeacher(this.userId);
      });
    }
}

