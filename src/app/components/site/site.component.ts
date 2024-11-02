import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [ RouterLink , CommonModule ],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})
export class SiteComponent {

}
