import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post = new Post(0, '', '', new Date());

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getPost(this.route.snapshot.params.id).subscribe(res => {
      this.post = res;
    }, err => {
      console.log(err);
    });
  }

}
