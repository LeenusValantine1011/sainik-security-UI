import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  clientLogos = [
    { src: 'assets/clients/clients1.svg', alt: 'HABA' },
    { src: 'assets/clients/clients1.svg', alt: 'HABA' },
    { src: 'assets/clients/clients1.svg', alt: 'HABA' },
    { src: 'assets/clients/clients1.svg', alt: 'HABA' },
    { src: 'assets/clients/clients1.svg', alt: 'HABA' },
    { src: 'assets/clients/clients1.svg', alt: 'HABA' },
    { src: 'assets/clients/clients1.svg', alt: 'HABA' },
    { src: 'assets/clients/clients1.svg', alt: 'HABA' },
    { src: 'assets/clients/clients1.svg', alt: 'HABA' },
    { src: 'assets/clients/clients1.svg', alt: 'HABA' },
    { src: 'assets/clients/clients1.svg', alt: 'HABA' },
    { src: 'assets/clients/clients1.svg', alt: 'HABA' },
    
  ];
  

}
