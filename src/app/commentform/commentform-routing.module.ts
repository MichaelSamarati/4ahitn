import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentformPage } from './commentform.page';

const routes: Routes = [
  {
    path: '',
    component: CommentformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentformPageRoutingModule {}
