import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  readonly specifications = [
    ['Product type', 'Polymer-modified thin-set adhesive'],
    ['Ideal for', 'Ceramic, vitrified and porcelain tiles'],
    ['Application', 'Interior and exterior walls and floors'],
    ['Pack size', '20 kg'],
    ['Colours', 'White and grey'],
  ];
}
