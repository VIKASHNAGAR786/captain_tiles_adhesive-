import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from '../../core/product-data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly products = PRODUCTS;
  readonly selectedProduct = signal(0);
  readonly benefits = [
    { number: '01', title: 'Strong bond', text: 'Reliable adhesion for ceramic, vitrified and porcelain tiles.' },
    { number: '02', title: 'Wall to floor', text: 'A versatile formulation for interior and exterior applications.' },
    { number: '03', title: 'Ready for sites', text: 'Simple mixing and confident application for everyday projects.' },
  ];

  readonly steps = ['Prepare the surface', 'Add water to powder', 'Mix to a smooth consistency', 'Apply with a notched trowel'];

  showPreviousProduct(): void {
    this.selectedProduct.update((index) => (index - 1 + this.products.length) % this.products.length);
  }

  showNextProduct(): void {
    this.selectedProduct.update((index) => (index + 1) % this.products.length);
  }
}
