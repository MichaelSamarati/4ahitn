import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  favouriteSubjectToColor,
  phoneToColor,
  burgerPizzaAvocadoToColor,
  favouriteColorToColor,
} from '../logic/student-color-ring';

@Component({
  selector: 'ring',
  templateUrl: './ring.component.html',
  styleUrls: ['./ring.component.scss'],
})
export class RingComponent implements OnInit {
  @Input() padding: number | undefined;
  @Input() image: string | undefined;
  @Input() favouriteSubject: string | undefined;
  @Input() phone: string | undefined;
  @Input() burgerPizzaAvocado: string | undefined;
  @Input() favouriteColor: string | undefined;
  favouriteColorColor: string | undefined;
  favouriteSubjectColor: string | undefined;
  phoneColor: string | undefined;
  burgerPizzaAvocadoColor: string | undefined;

  constructor() {}

  ngOnInit() {
    this.favouriteColorColor = favouriteColorToColor(
      this.favouriteColor!
    );
    this.favouriteSubjectColor = favouriteSubjectToColor(
      this.favouriteSubject!
    );
    this.phoneColor = phoneToColor(this.phone!);
    this.burgerPizzaAvocadoColor = burgerPizzaAvocadoToColor(
      this.burgerPizzaAvocado!
    );
    const ring: any = document.getElementById('ring');
    const img: any = document.getElementById('profile-image');
    ring.addEventListener('click', function () {
      ring.classList.remove('profile-ring-rotation-animation');
      img.classList.remove('counter-profile-ring-rotation-animation');
      new Promise((f) => setTimeout(f, 0));
      ring.classList.add('profile-ring-rotation-animation');
      img.classList.add('counter-profile-ring-rotation-animation');
    });
  }
}
