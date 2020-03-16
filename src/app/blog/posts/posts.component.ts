import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getPosts().subscribe(res => {
      this.posts = res;
    }, err => {
      console.log(err);
    });

  }

}
