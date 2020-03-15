import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent, children: [
    { path: '', component: PostsComponent, data: {animation: 'Posts'} },
    { path: 'post/:id', component: PostComponent, data: {animation: 'Post'} }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
