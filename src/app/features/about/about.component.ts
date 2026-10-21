import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit, OnDestroy {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updatePageMetadata({
      title: 'About Us | Captain Tiles Adhesive | Baran, Rajasthan',
      description: 'Learn about Captain Tiles Adhesive, our manufacturing facility in Baran, Rajasthan, and our commitment to dependable tile bonding solutions.',
      keywords: 'about Captain tiles adhesive, tile adhesive plant Baran, Patel Sons Enterprises, tile adhesive manufacturer Rajasthan',
      path: '/about/',
      ogType: 'website',
      ogImage: '/assets/images/products/captain-dura-bond-bag.jpeg',
    });

    const breadcrumbSchema = this.seo.getBreadcrumbsSchema([
      { name: 'Home', url: '/' },
      { name: 'About Us', url: '/about/' },
    ]);

    this.seo.setJsonLd('about-breadcrumbs', breadcrumbSchema);
    this.seo.setJsonLd('organization', this.seo.getOrganizationSchema());
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd('about-breadcrumbs');
  }
}
