import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentsComponent } from './comments.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CommentsComponent],
  imports: [CommonModule, IonicModule],
  exports: [CommentsComponent],
})
export class CommentsModule {}
