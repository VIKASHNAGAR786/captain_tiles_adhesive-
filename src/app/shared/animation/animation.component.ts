import { Component, Input } from '@angular/core';

export type AnimationName = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';

@Component({
  selector: 'app-animation',
  standalone: true,
  template: '<ng-content />',
  styleUrl: './animation.component.scss',
  host: {
    '[class.fade-up]': "animation === 'fade-up'",
    '[class.fade-in]': "animation === 'fade-in'",
    '[class.slide-left]': "animation === 'slide-left'",
    '[class.slide-right]': "animation === 'slide-right'",
    '[class.scale-in]': "animation === 'scale-in'",
    '[style.--animation-delay]': 'delay',
  },
})
export class AnimationComponent {
  @Input() animation: AnimationName = 'fade-up';
  @Input() delay = '0ms';
}
