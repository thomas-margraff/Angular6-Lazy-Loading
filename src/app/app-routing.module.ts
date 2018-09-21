import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'posts',
    loadChildren: '../app/posts/posts.module#PostsModule'
  },
  {
    path: 'king',
    loadChildren: '../app/king/king.module#KingModule'
  },
  {
    path: 'user',
    loadChildren: '../app/user/user.module#UserModule'
  },
  {
    path: 'customer',
    loadChildren: '../app/customer/customer.module#CustomerModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
