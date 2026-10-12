import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly benefits = [
    { number: '01', title: 'Strong bond', text: 'Reliable adhesion for ceramic, vitrified and porcelain tiles.' },
    { number: '02', title: 'Wall to floor', text: 'A versatile formulation for interior and exterior applications.' },
    { number: '03', title: 'Ready for sites', text: 'Simple mixing and confident application for everyday projects.' },
  ];

  readonly steps = ['Prepare the surface', 'Add water to powder', 'Mix to a smooth consistency', 'Apply with a notched trowel'];
}
