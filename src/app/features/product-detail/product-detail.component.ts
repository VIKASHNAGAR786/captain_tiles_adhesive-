import { DOCUMENT } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { PRODUCTS, PRODUCT_BENEFITS, PRODUCT_DESCRIPTION, PRODUCT_DIRECTIONS, PRODUCT_PRECAUTIONS, PRODUCT_SPECIFICATIONS, PRODUCT_TYPES, Product } from '../../core/product-data';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly canonical = this.document.createElement('link');
  private readonly structuredData = this.document.createElement('script');
  readonly product: Product = PRODUCTS.find((item) => item.slug === this.route.snapshot.paramMap.get('slug')) ?? PRODUCTS[0];
  readonly description = PRODUCT_DESCRIPTION;
  readonly benefits = PRODUCT_BENEFITS;
  readonly idealFor = PRODUCT_TYPES;
  readonly directions = PRODUCT_DIRECTIONS;
  readonly precautions = PRODUCT_PRECAUTIONS;
  readonly specifications = PRODUCT_SPECIFICATIONS;

  ngOnInit(): void {
    const productTitle = `Captain ${this.product.name} Tile Adhesive | Captain Tiles Adhesive`;
    const url = `https://www.captaintilesadhesive.in/products/${this.product.slug}`;
    this.title.setTitle(productTitle);
    this.meta.updateTag({ name: 'description', content: this.product.seoDescription });
    this.meta.updateTag({ name: 'keywords', content: this.product.keywords });
    this.meta.updateTag({ property: 'og:title', content: productTitle });
    this.meta.updateTag({ property: 'og:description', content: this.product.seoDescription });
    this.meta.updateTag({ property: 'og:type', content: 'product' });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: `https://www.captaintilesadhesive.in${this.product.image}` });
    this.canonical.rel = 'canonical';
    this.canonical.href = url;
    this.document.head.appendChild(this.canonical);
    this.structuredData.type = 'application/ld+json';
    this.structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Product', name: `Captain ${this.product.name} Tiles Adhesive`, description: this.product.seoDescription,
      image: [`https://www.captaintilesadhesive.in${this.product.image}`], brand: { '@type': 'Brand', name: 'Captain Tiles Adhesive' }, category: 'Tile adhesive',
      manufacturer: { '@type': 'Organization', name: 'Patel Sons Enterprises', address: { '@type': 'PostalAddress', addressRegion: 'Rajasthan', postalCode: '325205', addressCountry: 'IN' } }, url,
    });
    this.document.head.appendChild(this.structuredData);
  }

  ngOnDestroy(): void {
    this.canonical.remove();
    this.structuredData.remove();
  }
}
