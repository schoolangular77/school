import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
imports: [CommonModule, RouterOutlet,RouterModule,CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // myInterval = 1500;
  // activeSlideIndex = 0;
  // slides: {image: string; text?: string}[] = [
  //   {image: 'assets/images/nature/3.jpg'},
  //   {image: 'assets/images/nature/2.jpg'},
  //   {image: 'assets/images/nature/1.jpg'}
  // ];
}
