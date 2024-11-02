import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

interface Service {
  title: string;
  description: string;
  icon: string;
  buttonText: string;
}

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  services: Service[] = [
    {
      title: 'Création de Sites Web',
      description: `Développez un site web captivant et adapté à vos besoins pour attirer vos clients. 
                    Notre équipe d'experts travaille avec vous pour créer une présence en ligne qui reflète 
                    votre marque et engage votre audience. Que ce soit pour une vitrine, un blog, ou une 
                    plateforme de commerce électronique, nous avons la solution qu'il vous faut.`,
      icon: 'fas fa-laptop-code',
      buttonText: 'Découvrez nos réalisations',
    },
    {
      title: 'Développement d\'Applications Mobiles',
      description: `Créez des applications mobiles intuitives et performantes pour iOS et Android. 
                    Nous utilisons les dernières technologies pour garantir que votre application offre 
                    une expérience utilisateur exceptionnelle, tout en répondant aux exigences de votre 
                    entreprise et de votre marché cible.`,
      icon: 'fas fa-mobile-alt',
      buttonText: 'En savoir plus',
    },
    {
      title: 'Consultation en Stratégie Digitale',
      description: `Optimisez votre présence en ligne avec notre expertise en stratégie digitale. 
                    Nous vous aidons à définir vos objectifs, à identifier votre public cible, et à 
                    élaborer un plan d'action efficace pour maximiser votre impact et votre retour sur 
                    investissement dans le monde numérique.`,
      icon: 'fas fa-chart-line',
      buttonText: 'Planifiez une consultation',
    },
    {
      title: 'SEO et Marketing Digital',
      description: `Améliorez votre visibilité en ligne avec des techniques SEO avancées et des 
                    stratégies marketing. Nos experts analysent votre site, optimisent votre contenu 
                    et mettent en place des campagnes ciblées pour augmenter votre trafic organique 
                    et vos conversions.`,
      icon: 'fas fa-search',
      buttonText: 'Boostez votre visibilité',
    },
    {
      title: 'Maintenance et Support',
      description: `Bénéficiez d'un support technique réactif et d'une maintenance proactive pour 
                    vos solutions digitales. Nous nous assurons que votre site ou application reste à 
                    jour, sécurisé et performant, tout en vous offrant une assistance en cas de besoin.`,
      icon: 'fas fa-tools',
      buttonText: 'Contactez-nous pour le support',
    },
    {
      title: 'Formations et Ateliers',
      description: `Participez à nos formations pour améliorer vos compétences en développement 
                    web et mobile. Nos ateliers interactifs sont conçus pour vous aider à acquérir 
                    des connaissances pratiques et des compétences techniques essentielles pour réussir 
                    dans le monde numérique d'aujourd'hui.`,
      icon: 'fas fa-chalkboard-teacher',
      buttonText: 'Inscrivez-vous aux ateliers',
    },
  ];

  ngOnInit(): void {
    AOS.init();
  }
}
