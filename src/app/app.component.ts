import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NavCarrouselComponent } from './shared/nav-carrousel/nav-carrousel.component';
import { EquipeComponent } from './section/equipe/equipe.component';
import { TemoignageComponent } from './section/temoignage/temoignage.component';
import { ServiceComponent } from './section/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { SeoOptimisationComponent } from './components/seo-optimisation/seo-optimisation.component';
import { DesigneUiUxComponent } from './components/designe-ui-ux/designe-ui-ux.component';
import { MaquettesComponent } from './components/maquettes/maquettes.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { ApplicationComponent } from './components/application/application.component';
import { SiteComponent } from './components/site/site.component';
import { CompteurComponent } from './section/compteur/compteur.component';
import { ChatComponent } from './section/chat/chat.component';
import { PresentationComponent } from './section/presentation/presentation.component';
import { EcritComponent } from './section/ecrit/ecrit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent,
     ContactComponent, HomeComponent, NavCarrouselComponent, 
    EquipeComponent, TemoignageComponent, ServiceComponent, 
    AboutComponent, SiteComponent, ApplicationComponent, 
    MaintenanceComponent, SeoOptimisationComponent, DesigneUiUxComponent,
    MaquettesComponent, CommunicationComponent, CompteurComponent, ChatComponent, 
    PresentationComponent, EcritComponent
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'second';
}
