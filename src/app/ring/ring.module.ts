import { CommonModule } from '@angular/common';
import { RingComponent } from './ring.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [RingComponent],
  exports: [RingComponent],
})
export class RingModule {}
