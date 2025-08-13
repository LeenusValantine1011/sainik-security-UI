import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  encapsulation: ViewEncapsulation.None // <-- important
})


export class HeroComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  clientLogos = [
    { src: 'assets/clients/Atrium.png', alt: 'Atrium' },
    { src: 'assets/clients/bhadradri.jpeg', alt: 'bhadradri' },
    { src: 'assets/clients/ccgb.jpeg', alt: 'ccgb' },
    { src: 'assets/clients/DMart Logo Vector.png', alt: 'DMart' },
    { src: 'assets/clients/DSM.jpeg', alt: 'DSM' },
    { src: 'assets/clients/HonerHomes.jpg', alt: 'HonerHomes' },
    { src: 'assets/clients/kalyan jewellers.svg', alt: 'kalyan' },
    { src: 'assets/clients/lanco.png', alt: 'Lanco' },
    { src: 'assets/clients/lemeridian.svg', alt: 'lemeridian' },
    { src: 'assets/clients/Mars.jpg', alt: 'mars' },
    { src: 'assets/clients/piramal.svg', alt: 'piramal' },
    { src: 'assets/clients/resonance.png', alt: 'resonance' },
    { src: 'assets/clients/Sark-Height-one.jpg', alt: 'Sark' },
    { src: 'assets/clients/sumadhra.jpeg', alt: 'sumadhra' },
    { src: 'assets/clients/vidya herbs.png', alt: 'vidya' },
    { src: 'assets/clients/VVC Motors.png', alt: 'VVC' },
    
  ];
  

}
