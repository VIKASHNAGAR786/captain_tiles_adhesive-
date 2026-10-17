import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ selector: 'app-blog', imports: [RouterLink], templateUrl: './blog.component.html', styleUrl: './blog.component.scss' })
export class BlogComponent {
  readonly posts = [
    { number: '01', category: 'How to', title: 'How to choose the right tile adhesive for your surface', excerpt: 'A practical guide to matching tile type, wall or floor use, and site conditions.', date: 'Coming soon' },
    { number: '02', category: 'On site', title: 'Six steps to a cleaner tile installation', excerpt: 'Small preparation decisions that make application smoother and the final bond stronger.', date: 'Coming soon' },
    { number: '03', category: 'Captain notes', title: 'Inside the material: what a strong bond depends on', excerpt: 'A closer look at consistency, water resistance, and everyday site performance.', date: 'Coming soon' },
  ];
}
