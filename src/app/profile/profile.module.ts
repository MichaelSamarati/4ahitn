import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { RingModule } from '../ring/ring.module';
import { AttributeModule } from '../attribute/attribute.module';
import { CommentsModule } from '../comments/comments.module';
import { ProfileheaderModule } from '../profileheader/profileheader.module';
import { MovingBackgroundModule } from '../moving-background/moving-background.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    RingModule,
    AttributeModule,
    CommentsModule,
    ProfileheaderModule,
    MovingBackgroundModule
  ],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
