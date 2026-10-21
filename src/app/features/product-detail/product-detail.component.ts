import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  PRODUCTS,
  PRODUCT_BENEFITS,
  PRODUCT_DESCRIPTION,
  PRODUCT_DIRECTIONS,
  PRODUCT_PRECAUTIONS,
  PRODUCT_SPECIFICATIONS,
  PRODUCT_TYPES,
  Product,
} from '../../core/product-data';
import { SeoService } from '../../core/seo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private routeSub?: Subscription;

  product: Product = PRODUCTS[0];
  readonly description = PRODUCT_DESCRIPTION;
  readonly benefits = PRODUCT_BENEFITS;
  readonly idealFor = PRODUCT_TYPES;
  readonly directions = PRODUCT_DIRECTIONS;
  readonly precautions = PRODUCT_PRECAUTIONS;
  readonly specifications = PRODUCT_SPECIFICATIONS;

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.product = PRODUCTS.find((item) => item.slug === slug) ?? PRODUCTS[0];
      this.applySeoAndStructuredData();
    });
  }

  private applySeoAndStructuredData(): void {
    const productTitle = `Captain ${this.product.name} Tile Adhesive | ${this.product.grade}`;
    const productPath = `/products/${this.product.slug}/`;

    this.seo.updatePageMetadata({
      title: productTitle,
      description: this.product.seoDescription,
      keywords: this.product.keywords,
      path: productPath,
      ogType: 'product',
      ogImage: this.product.image,
    });

    // Product Schema (JSON-LD)
    const productSchema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: `Captain ${this.product.name} Tiles Adhesive`,
      description: this.product.seoDescription,
      image: [`https://www.captaintilesadhesive.in${this.product.image}`],
      sku: `CTA-${this.product.number}`,
      mpn: `CTA-${this.product.number}`,
      brand: {
        '@type': 'Brand',
        name: 'Captain Tiles Adhesive',
      },
      category: 'Tile adhesive',
      material: 'Polymer-modified cementitious tile adhesive',
      weight: {
        '@type': 'QuantitativeValue',
        value: 20,
        unitCode: 'KGM',
      },
      manufacturer: {
        '@type': 'Organization',
        name: 'Patel Sons Enterprises',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Baran',
          addressRegion: 'Rajasthan',
          postalCode: '325205',
          addressCountry: 'IN',
        },
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '0',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        url: `https://www.captaintilesadhesive.in${productPath}`,
      },
    };

    // Breadcrumb Schema
    const breadcrumbSchema = this.seo.getBreadcrumbsSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
      { name: `Captain ${this.product.name}`, url: productPath },
    ]);

    this.seo.setJsonLd('product', productSchema);
    this.seo.setJsonLd('breadcrumbs', breadcrumbSchema);
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    this.seo.removeJsonLd('product');
    this.seo.removeJsonLd('breadcrumbs');
  }
}
