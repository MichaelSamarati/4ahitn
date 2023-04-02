import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  favouriteSubjectToColor,
  phoneToColor,
} from '../logic/student-color-ring';

@Component({
  selector: 'ring',
  templateUrl: './ring.component.html',
  styleUrls: ['./ring.component.scss'],
})
export class RingComponent implements OnInit, OnChanges {
  @Input() padding: number | undefined;
  @Input() image: string | undefined;
  @Input() favouriteSubject: string | undefined;
  @Input() phone: string | undefined;
  @Input() favouriteColor: string | undefined;
  favouriteSubjectColor: string | undefined;
  phoneColor: string | undefined;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.favouriteSubjectColor = favouriteSubjectToColor(
      this.favouriteSubject!
    );
    this.phoneColor = phoneToColor(this.phone!);
  }
}
