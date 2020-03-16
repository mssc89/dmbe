import { trigger, state, style, animate, transition, query, animateChild, group, stagger } from '@angular/animations';

export const routerAnimation =
trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave',
      style({
        position: 'fixed',
        width: '100%'
      }), { optional: true }),
    group([
      query(':enter', [
        style({ opacity: 0 }),
        animate('.3s', style({ opacity: 1 }))
      ], { optional: true }),

      query(':leave', [
        style({ opacity: 1 }),
        animate('.3s', style({ opacity: 0 }))
      ], { optional: true }),
    ])
  ])
]);
