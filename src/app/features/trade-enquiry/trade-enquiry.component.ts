import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-trade-enquiry',
  imports: [FormsModule],
  templateUrl: './trade-enquiry.component.html',
  styleUrl: './trade-enquiry.component.scss',
})
export class TradeEnquiryComponent implements OnInit, OnDestroy {
  private readonly seo = inject(SeoService);
  readonly submitted = signal(false);

  ngOnInit(): void {
    this.seo.updatePageMetadata({
      title: 'Trade & Dealership Enquiry | Captain Tiles Adhesive',
      description: 'Partner with Captain Tiles Adhesive. Apply for dealership, distribution, or contractor pricing across Rajasthan and India.',
      keywords: 'tile adhesive dealership, tile adhesive distributor, contractor discount, Captain adhesive Baran trade',
      path: '/trade-enquiry/',
      ogType: 'website',
      ogImage: '/assets/images/products/captain-dura-bond-bag.jpeg',
    });

    const breadcrumbs = this.seo.getBreadcrumbsSchema([
      { name: 'Home', url: '/' },
      { name: 'Trade Enquiry', url: '/trade-enquiry/' },
    ]);

    this.seo.setJsonLd('trade-breadcrumbs', breadcrumbs);
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd('trade-breadcrumbs');
  }
}
