import { Component, computed, signal } from '@angular/core';
import { PRODUCTS } from '../../core/product-data';

interface TileOption {
  id: string;
  label: string;
  sub: string;
  bedMm: string;
  coverageSqFt: number;
}

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  readonly products = PRODUCTS;

  readonly tileOptions: TileOption[] = [
    {
      id: 'standard',
      label: 'Ceramic & Vitrified',
      sub: 'Up to 2x2 ft · 3mm notched bed',
      bedMm: '3mm',
      coverageSqFt: 45,
    },
    {
      id: 'medium',
      label: 'Large Format Vitrified',
      sub: 'Up to 4x2 ft · 4.5mm notched bed',
      bedMm: '4.5mm',
      coverageSqFt: 35,
    },
    {
      id: 'slab',
      label: 'Heavy Slabs & Exterior',
      sub: 'Wall & Large Slabs · 6mm bed',
      bedMm: '6mm',
      coverageSqFt: 25,
    },
  ];

  readonly selectedTileId = signal('standard');
  readonly selectedProductSlug = signal('captain-dura-bond');
  readonly areaSqFt = signal(350);

  readonly selectedTile = computed(() => {
    return this.tileOptions.find((t) => t.id === this.selectedTileId()) ?? this.tileOptions[0];
  });

  readonly selectedProduct = computed(() => {
    return this.products.find((p) => p.slug === this.selectedProductSlug()) ?? this.products[0];
  });

  readonly calculatedBags = computed(() => {
    const coverage = this.selectedTile().coverageSqFt;
    // 5% standard wastage buffer on site
    const raw = (this.areaSqFt() / coverage) * 1.05;
    return Math.max(1, Math.ceil(raw));
  });

  readonly totalWeightKg = computed(() => this.calculatedBags() * 20);

  readonly waterLiters = computed(() => Math.round(this.totalWeightKg() * 0.25));

  readonly whatsappUrl = computed(() => {
    const text = encodeURIComponent(
      `Hello Captain Tiles Adhesive team! I calculated my requirement on your website calculator:\n\n` +
      `• Area: ${this.areaSqFt()} sq. ft.\n` +
      `• Tile Spec: ${this.selectedTile().label} (${this.selectedTile().bedMm} bed)\n` +
      `• Adhesive: Captain ${this.selectedProduct().name} (${this.selectedProduct().grade})\n` +
      `• Required: ${this.calculatedBags()} Bags (20 kg each)\n` +
      `• Total Weight: ${this.totalWeightKg()} kg\n\n` +
      `Please share direct dealer pricing and dispatch details from your Baran plant.`
    );
    return `https://wa.me/917976369073?text=${text}`;
  });

  setQuickArea(sqFt: number): void {
    this.areaSqFt.set(sqFt);
  }

  onAreaSliderChange(event: Event): void {
    const val = +(event.target as HTMLInputElement).value;
    if (!isNaN(val)) {
      this.areaSqFt.set(val);
    }
  }

  onAreaInputChange(event: Event): void {
    const val = +(event.target as HTMLInputElement).value;
    if (!isNaN(val) && val >= 10) {
      this.areaSqFt.set(Math.min(val, 10000));
    }
  }

  selectTile(id: string): void {
    this.selectedTileId.set(id);
  }

  selectProduct(slug: string): void {
    this.selectedProductSlug.set(slug);
  }
}
