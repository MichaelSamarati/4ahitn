import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackgroundComponent } from './background.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [BackgroundComponent],
  exports: [BackgroundComponent],
})
export class BackgroundModule {}
