import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss']
})
export class BriefComponent implements OnInit {

  @Input() public post: Post;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

}
