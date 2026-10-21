import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  publishedTime?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  private readonly siteBaseUrl = 'https://www.captaintilesadhesive.in';
  private readonly defaultImage = `${this.siteBaseUrl}/assets/images/brand/captain-logo.jpeg`;
  private readonly siteName = 'Captain Tiles Adhesive';

  updatePageMetadata(data: PageMetadata): void {
    const fullTitle = data.title.includes(this.siteName)
      ? data.title
      : `${data.title} | ${this.siteName}`;
    const canonicalUrl = `${this.siteBaseUrl}${data.path ? (data.path.startsWith('/') ? data.path : '/' + data.path) : '/'}`;
    const imageUrl = data.ogImage?.startsWith('http')
      ? data.ogImage
      : `${this.siteBaseUrl}${data.ogImage ?? '/assets/images/brand/captain-logo.jpeg'}`;

    // Update document title
    this.title.setTitle(fullTitle);

    // Meta descriptions
    this.meta.updateTag({ name: 'description', content: data.description });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Canonical link
    this.updateCanonicalUrl(canonicalUrl);

    // Open Graph
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:locale', content: 'en_IN' });
    this.meta.updateTag({ property: 'og:type', content: data.ogType ?? 'website' });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });

    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
    this.meta.updateTag({ name: 'twitter:url', content: canonicalUrl });
  }

  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.head.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  setJsonLd(id: string, schema: Record<string, unknown> | Array<Record<string, unknown>>): void {
    const scriptId = `schema-${id}`;
    let script = this.document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }

  removeJsonLd(id: string): void {
    const script = this.document.getElementById(`schema-${id}`);
    if (script) {
      script.remove();
    }
  }

  getOrganizationSchema(): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${this.siteBaseUrl}/#organization`,
      name: this.siteName,
      alternateName: 'Patel Sons Enterprises',
      url: this.siteBaseUrl,
      logo: `${this.siteBaseUrl}/assets/images/brand/captain-logo.jpeg`,
      image: `${this.siteBaseUrl}/assets/images/products/captain-dura-bond-bag.jpeg`,
      description: 'Manufacturer of polymer-modified tile adhesives engineered for interior, exterior, wall and floor tile fixing.',
      telephone: '+917976369073',
      email: 'captaintilesadhesive@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Baran',
        addressRegion: 'Rajasthan',
        postalCode: '325205',
        addressCountry: 'IN',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+917976369073',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['en', 'hi'],
        },
      ],
    };
  }

  getLocalBusinessSchema(): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${this.siteBaseUrl}/#localbusiness`,
      name: this.siteName,
      alternateName: 'Patel Sons Enterprises',
      url: this.siteBaseUrl,
      logo: `${this.siteBaseUrl}/assets/images/brand/captain-logo.jpeg`,
      image: `${this.siteBaseUrl}/assets/images/products/captain-dura-bond-bag.jpeg`,
      telephone: '+917976369073',
      email: 'captaintilesadhesive@gmail.com',
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Bank Transfer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Baran',
        addressRegion: 'Rajasthan',
        postalCode: '325205',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 25.1011,
        longitude: 76.5132,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      areaServed: [
        {
          '@type': 'State',
          name: 'Rajasthan',
        },
        {
          '@type': 'Country',
          name: 'India',
        },
      ],
    };
  }

  getWebSiteSchema(): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${this.siteBaseUrl}/#website`,
      name: this.siteName,
      url: this.siteBaseUrl,
      description: 'Captain Tiles Adhesive supplies dependable tile adhesive for walls, floors and demanding sites from Baran, Rajasthan.',
      inLanguage: 'en-IN',
      publisher: {
        '@id': `${this.siteBaseUrl}/#organization`,
      },
    };
  }

  getBreadcrumbsSchema(crumbs: BreadcrumbItem[]): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url.startsWith('http') ? crumb.url : `${this.siteBaseUrl}${crumb.url}`,
      })),
    };
  }
}
