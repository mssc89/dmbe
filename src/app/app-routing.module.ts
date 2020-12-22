import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
  { path: '', loadChildren: () => import('./modules/utils/utils.module').then(m => m.UtilsModule) },
  { path: 'account', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
