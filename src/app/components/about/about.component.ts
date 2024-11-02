import { CommonModule } from '@angular/common';
import { Component,  AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent  {

  ngOnInit(): void {
    Aos.init();
  }
 
}
