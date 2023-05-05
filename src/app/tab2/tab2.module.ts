import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ProfileCardItemModule } from '../profile-card-item/profile-card-item.module';
import { BackgroundModule } from '../background/background.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ProfileCardItemModule,
    BackgroundModule,
  ],
  declarations: [Tab2Page],
})
export class Tab2PageModule {}
