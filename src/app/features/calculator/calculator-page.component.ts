import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { CalculatorComponent } from '../../shared/calculator/calculator.component';

@Component({
  selector: 'app-calculator-page',
  standalone: true,
  imports: [RouterLink, CalculatorComponent],
  templateUrl: './calculator-page.component.html',
  styleUrl: './calculator-page.component.scss',
})
export class CalculatorPageComponent implements OnInit, OnDestroy {
  private readonly seo = inject(SeoService);

  readonly guidelines = [
    {
      bed: '3mm Notched Bed',
      tiles: 'Ceramic & Vitrified (up to 2x2 ft)',
      coverage: '45 - 50 sq. ft. per 20kg bag',
      tip: 'Ideal for internal floors, walls, and standard cementitious substrates.',
    },
    {
      bed: '4.5mm Notched Bed',
      tiles: 'Large Format Vitrified (up to 4x2 ft)',
      coverage: '35 - 40 sq. ft. per 20kg bag',
      tip: 'Requires consistent trowel angle and even pressure for hollow-free bonding.',
    },
    {
      bed: '6mm Bed & Cladding',
      tiles: 'Heavy GVT, Slabs & Exterior Walls',
      coverage: '25 - 30 sq. ft. per 20kg bag',
      tip: 'Butter-back application is recommended for maximum adhesion on large tiles.',
    },
  ];

  ngOnInit(): void {
    this.seo.updatePageMetadata({
      title: 'Tile Adhesive Coverage & Bag Calculator | Captain Tiles Adhesive',
      description: 'Calculate exact 20kg bags of Captain tile adhesive needed for your project area. Includes coverage charts for ceramic, vitrified, and heavy slabs with site buffer.',
      keywords: 'tile adhesive calculator, tile coverage calculator, 20kg bag tile adhesive coverage, captain adhesive Baran calculator, square feet to bags',
      path: '/calculator/',
      ogType: 'website',
      ogImage: '/assets/images/brand/captain-cover-banner.jpg',
    });

    const breadcrumbs = this.seo.getBreadcrumbsSchema([
      { name: 'Home', url: '/' },
      { name: 'Tile Adhesive Calculator', url: '/calculator/' },
    ]);

    this.seo.setJsonLd('calculator-breadcrumbs', breadcrumbs);
  }

  ngOnDestroy(): void {
    this.seo.removeJsonLd('calculator-breadcrumbs');
  }
}
