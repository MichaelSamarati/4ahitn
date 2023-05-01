import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  favouriteSubjectToColor,
  phoneToColor,
  burgerPizzaAvocadoToColor,
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
  @Input() burgerPizzaAvocado: string | undefined;
  @Input() favouriteColor: string | undefined;
  favouriteSubjectColor: string | undefined;
  phoneColor: string | undefined;
  burgerPizzaAvocadoColor: string | undefined;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.favouriteSubjectColor = favouriteSubjectToColor(
      this.favouriteSubject!
    );
    this.phoneColor = phoneToColor(this.phone!);
    this.burgerPizzaAvocadoColor = burgerPizzaAvocadoToColor(this.burgerPizzaAvocado!);
  }

  replayProfileRingRotationAnimation() {
    (async () => {
      const ring: any = document.querySelector(
        '.profile-ring-rotation-animation'
      );
      const img: any = document.querySelector(
        '.counter-profile-ring-rotation-animation'
      );
      ring.classList.remove('profile-ring-rotation-animation');
      img.classList.remove('counter-profile-ring-rotation-animation');

      await new Promise((f) => setTimeout(f, 0));

      ring.classList.add('profile-ring-rotation-animation');
      img.classList.add('counter-profile-ring-rotation-animation');
    })();
  }
}
