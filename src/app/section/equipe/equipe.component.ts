import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Aos from 'aos';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent {

  ngOnInit(): void {
    Aos.init();
  }

}
