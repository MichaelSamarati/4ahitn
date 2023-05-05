import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';


import { ProfileCardItemComponent } from './profile-card-item.component';
import { RingModule } from '../ring/ring.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RingModule, RouterModule],
  declarations: [ProfileCardItemComponent],
  exports: [ProfileCardItemComponent],
})
export class ProfileCardItemModule {}
