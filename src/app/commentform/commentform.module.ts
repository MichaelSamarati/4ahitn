import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentformPageRoutingModule } from './commentform-routing.module';

import { CommentformPage } from './commentform.page';
import { ProfileheaderModule } from '../profileheader/profileheader.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileheaderModule,
    CommentformPageRoutingModule,
  ],
  declarations: [CommentformPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommentformPageModule {}
