import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from '../../core/product-data';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
  private readonly seo = inject(SeoService);
  readonly products = PRODUCTS;

  ngOnInit(): void {
    this.seo.updatePageMetadata({
      title: 'Tile Adhesive Product Catalogue | Captain Tiles Adhesive',
      description: 'Explore the Captain Tiles Adhesive range: Dura Bond, Dura Grip, Dura Stick, and Dura Shield. Manufactured in Baran, Rajasthan for wall and floor tile fixing.',
      keywords: 'tile adhesive catalogue, Dura Bond, Dura Grip, Dura Stick, Dura Shield, tile adhesive price, tile chemical Rajasthan',
      path: '/products/',
      ogType: 'website',
      ogImage: '/assets/images/products/type1.jpeg',
    });

    const breadcrumbSchema = this.seo.getBreadcrumbsSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products/' },
    ]);

    const itemListSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: this.products.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://www.captaintilesadhesive.in/products/${item.slug}/`,
        name: `Captain ${item.name} (${item.grade})`,
      })),
    };

    this.seo.setJsonLd('breadcrumbs', breadcrumbSchema);
    this.seo.setJsonLd('itemlist', itemListSchema);
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd('breadcrumbs');
    this.seo.removeJsonLd('itemlist');
  }
}
