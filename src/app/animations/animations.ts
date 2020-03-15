import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';

export const Animations =
  trigger('routeAnimations', [
    transition('Posts <=> Post', [
      style({ position: 'relative' })
    ])
]);
