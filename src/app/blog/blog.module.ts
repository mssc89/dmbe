import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostsComponent } from './posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    BlogComponent, PostsComponent, PostComponent
  ],
  imports: [
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
