import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {
      id: 1,
      title: 'CCTV Surveillance Systems',
      img: 'assets/images/cctv.png',
      description: 'High-definition CCTV cameras for security monitoring.',
    },
    {
      id: 2,
      title: 'Access Control Systems',
      img: 'assets/images/access-control.png',
      description: 'Manage and secure access with biometric and card systems.',
    },
    {
      id: 3,
      title: 'Entrance Automation',
      img: 'assets/images/entrance-automation.png',
      description: 'Automatic gates, shutters, and boom barriers.',
    },
    {
      id: 4,
      title: 'Pedestrian Automation',
      img: 'assets/images/pedestrian-automation.png',
      description: 'Turnstiles and pedestrian access control.',
    },
    {
      id: 5,
      title: 'High–Security Solutions',
      img: 'assets/images/high-security.png',
      description: 'Advanced bollards, crash barriers, and anti-ram systems.',
    },
    {
      id: 6,
      title: 'Vehicle & Parking Management',
      img: 'assets/images/vehicle-parking.png',
      description: 'Smart vehicle entry and parking management solutions.',
    }
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
