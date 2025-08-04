import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS, Product } from 'src/data/products-data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const foundProduct = PRODUCTS.find(p => p.id === id);

    if (foundProduct) {
      this.product = foundProduct;
    } else {
      console.error('Product not found');
    }
  }

  getWhatsappLink(): string {
    return `https://wa.me/${this.product.whatsappNumber}`;
  }

}
