import { Component, OnInit, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animations } from '../animations/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    Animations
  ]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
