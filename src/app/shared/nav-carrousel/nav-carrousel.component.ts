import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-nav-carrousel',
  standalone: true,
  imports: [ CommonModule, RouterLink, NavbarComponent ],
  templateUrl: './nav-carrousel.component.html',
  styleUrl: './nav-carrousel.component.css'
})
export class NavCarrouselComponent {

}
