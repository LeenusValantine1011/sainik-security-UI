import { Component } from '@angular/core';
import { PRODUCT_CARDS } from 'src/data/products-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = PRODUCT_CARDS;
}
