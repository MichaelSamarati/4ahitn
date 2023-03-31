import { Component, Input, OnInit } from '@angular/core';
import { favouriteSubjectToColor } from '../logic/student-color-ring';

@Component({
  selector: 'ring',
  templateUrl: './ring.component.html',
  styleUrls: ['./ring.component.scss'],
})
export class RingComponent implements OnInit {
  @Input() imageUrl!: string;
  @Input() favouriteSubject!: string;
  favouriteSubjectColor!: string;

  constructor() {}

  ngOnInit(): void {
    this.favouriteSubjectColor = favouriteSubjectToColor(this.favouriteSubject);
  }
}
