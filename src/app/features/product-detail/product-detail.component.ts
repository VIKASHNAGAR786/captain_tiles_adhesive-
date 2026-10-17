import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { PRODUCTS, PRODUCT_BENEFITS, PRODUCT_DESCRIPTION, PRODUCT_DIRECTIONS, PRODUCT_PRECAUTIONS, PRODUCT_SPECIFICATIONS, PRODUCT_TYPES, Product } from '../../core/product-data';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  private readonly route = inject(ActivatedRoute);
  readonly product: Product = PRODUCTS.find((item) => item.slug === this.route.snapshot.paramMap.get('slug')) ?? PRODUCTS[0];
  readonly description = PRODUCT_DESCRIPTION;
  readonly benefits = PRODUCT_BENEFITS;
  readonly idealFor = PRODUCT_TYPES;
  readonly directions = PRODUCT_DIRECTIONS;
  readonly precautions = PRODUCT_PRECAUTIONS;
  readonly specifications = PRODUCT_SPECIFICATIONS;
}
