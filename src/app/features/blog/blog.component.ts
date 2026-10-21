import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit, OnDestroy {
  private readonly seo = inject(SeoService);

  readonly posts = [
    { number: '01', category: 'How to', title: 'How to choose the right tile adhesive for your surface', excerpt: 'A practical guide to matching tile type, wall or floor use, and site conditions.', date: 'Coming soon' },
    { number: '02', category: 'On site', title: 'Six steps to a cleaner tile installation', excerpt: 'Small preparation decisions that make application smoother and the final bond stronger.', date: 'Coming soon' },
    { number: '03', category: 'Captain notes', title: 'Inside the material: what a strong bond depends on', excerpt: 'A closer look at consistency, water resistance, and everyday site performance.', date: 'Coming soon' },
  ];

  ngOnInit(): void {
    this.seo.updatePageMetadata({
      title: 'Captain Journal & Application Guides | Captain Tiles Adhesive',
      description: 'Expert guides and practical installation notes for choosing, mixing, and applying tile adhesive on walls and floors.',
      keywords: 'tile installation guide, tile adhesive guide, how to apply tile adhesive, Captain adhesive journal',
      path: '/blog/',
      ogType: 'website',
      ogImage: '/assets/images/products/captain-dura-bond-bag.jpeg',
    });

    const breadcrumbs = this.seo.getBreadcrumbsSchema([
      { name: 'Home', url: '/' },
      { name: 'Journal', url: '/blog/' },
    ]);

    this.seo.setJsonLd('blog-breadcrumbs', breadcrumbs);
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd('blog-breadcrumbs');
  }
}
