import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ecrit',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './ecrit.component.html',
  styleUrl: './ecrit.component.css'
})
export class EcritComponent {
  text = 'CONTACTE';

}
