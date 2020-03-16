import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostsComponent } from './posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post/post.component';
import { BriefComponent } from './brief/brief.component';

@NgModule({
  declarations: [
    BlogComponent, PostsComponent, PostComponent, BriefComponent
  ],
  imports: [
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
