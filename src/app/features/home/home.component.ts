import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRODUCTS } from '../../core/product-data';
import { SeoService } from '../../core/seo.service';
import { CalculatorComponent } from '../../shared/calculator/calculator.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CalculatorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly seo = inject(SeoService);

  readonly products = PRODUCTS;
  readonly selectedProduct = signal(0);
  readonly isCardAnimating = signal(false);
  readonly animationDirection = signal<'next' | 'prev'>('next');

  // 3D Parallax Tilt state
  readonly tiltX = signal(0);
  readonly tiltY = signal(0);
  readonly isHoveringHero = signal(false);

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
      ogImage: '/assets/images/brand/captain-cover-banner.jpg',
    });

    // Structured data
    this.seo.setJsonLd('organization', this.seo.getOrganizationSchema());
    this.seo.setJsonLd('localbusiness', this.seo.getLocalBusinessSchema());
    this.seo.setJsonLd('website', this.seo.getWebSiteSchema());
  }

  ngOnDestroy(): void {
    // schemas can stay or be replaced by subsequent pages
  }

  onHeroMouseMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    this.isHoveringHero.set(true);
    // Smooth tilt angles
    this.tiltX.set(Math.round(x * 20));
    this.tiltY.set(Math.round(-y * 20));
  }

  onHeroMouseLeave(): void {
    this.isHoveringHero.set(false);
    this.tiltX.set(0);
    this.tiltY.set(0);
  }

  selectProduct(index: number): void {
    if (index === this.selectedProduct()) return;
    this.animationDirection.set(index > this.selectedProduct() ? 'next' : 'prev');
    this.selectedProduct.set(index);
    this.triggerCardAnimation();
  }

  showPreviousProduct(): void {
    this.animationDirection.set('prev');
    this.selectedProduct.update((index) => (index - 1 + this.products.length) % this.products.length);
    this.triggerCardAnimation();
  }

  showNextProduct(): void {
    this.animationDirection.set('next');
    this.selectedProduct.update((index) => (index + 1) % this.products.length);
    this.triggerCardAnimation();
  }

  private triggerCardAnimation(): void {
    this.isCardAnimating.set(false);
    requestAnimationFrame(() => {
      this.isCardAnimating.set(true);
      setTimeout(() => {
        this.isCardAnimating.set(false);
      }, 550);
    });
  }
}
