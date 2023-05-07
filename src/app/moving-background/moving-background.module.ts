import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MovingBackgroundComponent } from './moving-background.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [MovingBackgroundComponent],
  exports: [MovingBackgroundComponent],
})
export class MovingBackgroundModule {}
