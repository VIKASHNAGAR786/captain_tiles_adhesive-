import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from '../../core/product-data';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly seo = inject(SeoService);

  readonly products = PRODUCTS;
  readonly selectedProduct = signal(0);
  readonly benefits = [
    { number: '01', title: 'Strong bond', text: 'Reliable adhesion for ceramic, vitrified and porcelain tiles.' },
    { number: '02', title: 'Wall to floor', text: 'A versatile formulation for interior and exterior applications.' },
    { number: '03', title: 'Ready for sites', text: 'Simple mixing and confident application for everyday projects.' },
  ];

  readonly steps = ['Prepare the surface', 'Add water to powder', 'Mix to a smooth consistency', 'Apply with a notched trowel'];

  ngOnInit(): void {
    this.seo.updatePageMetadata({
      title: 'Captain Tiles Adhesive | Build with confidence | Baran, Rajasthan',
      description: 'Captain Tiles Adhesive manufactures dependable, polymer-modified tile adhesives for walls, floors, and demanding construction projects in Baran, Rajasthan, India.',
      keywords: 'tile adhesive, Captain tiles adhesive, tile adhesive manufacturer Baran, tile chemical Rajasthan, dura bond, ceramic tile adhesive, vitrified tile adhesive',
      path: '/',
      ogType: 'website',
      ogImage: '/assets/images/products/captain-dura-bond-bag.jpeg',
    });

    // Structured data
    this.seo.setJsonLd('organization', this.seo.getOrganizationSchema());
    this.seo.setJsonLd('localbusiness', this.seo.getLocalBusinessSchema());
    this.seo.setJsonLd('website', this.seo.getWebSiteSchema());
  }

  ngOnDestroy(): void {
    // schemas can stay or be replaced by subsequent pages
  }

  showPreviousProduct(): void {
    this.selectedProduct.update((index) => (index - 1 + this.products.length) % this.products.length);
  }

  showNextProduct(): void {
    this.selectedProduct.update((index) => (index + 1) % this.products.length);
  }
}
