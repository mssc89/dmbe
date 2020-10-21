import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post = new Post();

  constructor(private api: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getPost(this.route.snapshot.params.id).subscribe(res => {
      this.post = res;
    }, err => {
      console.log(err);
    });
  }

}
