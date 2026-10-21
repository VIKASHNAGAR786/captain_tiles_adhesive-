import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit, OnDestroy {
  private readonly seo = inject(SeoService);
  readonly submitted = signal(false);

  ngOnInit(): void {
    this.seo.updatePageMetadata({
      title: 'Contact Us | Captain Tiles Adhesive | Baran Plant',
      description: 'Get in touch with Captain Tiles Adhesive in Baran, Rajasthan. Call +91 7976369073 or chat on WhatsApp for tile adhesive enquiries, dealerships, and bulk orders.',
      keywords: 'contact Captain tiles adhesive, tile adhesive phone number, Captain adhesive Baran contact, tile chemical dealership enquiry',
      path: '/contact/',
      ogType: 'website',
      ogImage: '/assets/images/brand/captain-logo.jpeg',
    });

    const breadcrumbs = this.seo.getBreadcrumbsSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact Us', url: '/contact/' },
    ]);

    this.seo.setJsonLd('contact-breadcrumbs', breadcrumbs);
    this.seo.setJsonLd('contact-localbusiness', this.seo.getLocalBusinessSchema());
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd('contact-breadcrumbs');
  }
}
