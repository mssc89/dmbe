import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostsComponent } from './posts/posts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BlogComponent, PostsComponent
  ],
  imports: [
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
