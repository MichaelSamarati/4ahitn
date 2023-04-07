import { RingModule } from './../ring/ring.module';
import { CommonModule } from '@angular/common';
import { ProfileheaderComponent } from './profileheader.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ProfileheaderComponent],
  imports: [CommonModule, RingModule],
  exports: [ProfileheaderComponent],
})
export class ProfileheaderModule {}
