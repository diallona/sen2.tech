import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './section/service/service.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { SeoOptimisationComponent } from './components/seo-optimisation/seo-optimisation.component';
import { DesigneUiUxComponent } from './components/designe-ui-ux/designe-ui-ux.component';
import { MaquettesComponent } from './components/maquettes/maquettes.component';
import { CommunicationComponent } from './components/communication/communication.component';
import { ApplicationComponent } from './components/application/application.component';
import { SiteComponent } from './components/site/site.component';
import { CompteurComponent } from './section/compteur/compteur.component';

export const routes: Routes = [
    {  path: '', component: HomeComponent },
    { path :'contact', component:ContactComponent}, 
    { path :'about', component: AboutComponent}, 
    { path :'service', component: ServiceComponent}, 
    { path :'site', component: SiteComponent}, 
    { path :'application', component: ApplicationComponent},
    { path :'maintenance', component: MaintenanceComponent }, 
    { path: 'optimisation', component: SeoOptimisationComponent },
    { path: 'designe', component : DesigneUiUxComponent },
    { path :'maquette', component: MaquettesComponent },
    { path: 'communication', component : CommunicationComponent },
    { path: 'compteur', component : CompteurComponent },

 

    { path: 'home', redirectTo: 'home', pathMatch:'full' },
    { path : '**', redirectTo:'home', pathMatch : 'full' }
];
