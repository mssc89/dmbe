import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private api: PostsService) {
  }

  ngOnInit(): void {
    this.api.getPosts().subscribe(res => {
      this.posts = res;
    }, err => {
      console.log(err);
    });

  }

}
