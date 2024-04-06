import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule,CollapseModule],
  templateUrl: './app.component.html',  
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'الرئيسية';
  isCollapsed = true;
}
