import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EquipeComponent } from '../../section/equipe/equipe.component';
import { SavoirFaireComponent } from '../../section/savoir-faire/savoir-faire.component';
import { ServiceComponent } from '../../section/service/service.component';
import { TemoignageComponent } from '../../section/temoignage/temoignage.component';
import { AboutComponent } from '../about/about.component';
import { CompteurComponent } from '../../section/compteur/compteur.component';
import { ChatComponent } from '../../section/chat/chat.component';
import { PresentationComponent } from '../../section/presentation/presentation.component';
import { ContactComponent } from '../contact/contact.component';
import { SiteComponent } from '../site/site.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, EquipeComponent,
     SavoirFaireComponent, ServiceComponent, TemoignageComponent,
      AboutComponent, CompteurComponent, ChatComponent, PresentationComponent,  ContactComponent, SiteComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
