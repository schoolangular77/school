import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';
import {RouterOutlet,RouterModule} from '@angular/router';
import { StudentProfile } from '../studentProfile';
@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
ind:number=0;
stdProdilArr:StudentProfile[]=[];
constructor(public service:StudentService){}
  ngOnInit() {
    this.service.getStudentsWithMarks();
  }


}
