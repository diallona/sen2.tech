import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './compteur.component.html',
  styleUrl: './compteur.component.css'
})
export class CompteurComponent implements OnInit {


  counts = [
    { label: 'Clients Satisfaits', value: 0, target: 120 },
    { label: 'Membres de l\'Équipe', value: 0, target: 20 },
    { label: 'Projets Réalisés', value: 0, target: 30 }
  ];

  ngOnInit() {
    this.startCounters();
  }

  startCounters() {
    this.counts.forEach(counter => {
      let currentCount = 0;
      const increment = Math.ceil(counter.target / 100); // Change 100 for speed
      const interval = setInterval(() => {
        if (currentCount < counter.target) {
          currentCount += increment;
          counter.value = Math.min(currentCount, counter.target); // Prevent overshooting
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust timing for speed
    });
  }
}
