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

  ngOnInit() {
    const ring: any = document.getElementById('ring');
    const img: any = document.getElementById('profile-image');
    ring.addEventListener('click', function () {
      console.log('here');
      ring.classList.remove('profile-ring-rotation-animation');
      img.classList.remove('counter-profile-ring-rotation-animation');
      new Promise((f) => setTimeout(f, 0));
      console.log('hwere');
      ring.classList.add('profile-ring-rotation-animation');
      img.classList.add('counter-profile-ring-rotation-animation');
    });
    // ring.attachEvent('onclick', function () {
    //   console.log('here');
    //   ring.classList.remove('profile-ring-rotation-animation');
    //   img.classList.remove('counter-profile-ring-rotation-animation');
    //   new Promise((f) => setTimeout(f, 0));
    //   console.log('hwere');
    //   ring.classList.add('profile-ring-rotation-animation');
    //   img.classList.add('counter-profile-ring-rotation-animation');
    // });
    // ring.onclick = function () {
    // console.log('here');
    //   ring.classList.remove('profile-ring-rotation-animation');
    //   img.classList.remove('counter-profile-ring-rotation-animation');
    //   new Promise((f) => setTimeout(f, 0));
    //   console.log('hwere');
    //   ring.classList.add('profile-ring-rotation-animation');
    //   img.classList.add('counter-profile-ring-rotation-animation');
    // };
  }

  ngOnChanges() {
    this.favouriteSubjectColor = favouriteSubjectToColor(
      this.favouriteSubject!
    );
    this.phoneColor = phoneToColor(this.phone!);
    this.burgerPizzaAvocadoColor = burgerPizzaAvocadoToColor(
      this.burgerPizzaAvocado!
    );
  }

  replayProfileRingRotationAnimation() {
    (async () => {
      // ring.classList.remove('profile-ring-rotation-animation');
      // img.classList.remove('counter-profile-ring-rotation-animation');
      // await new Promise((f) => setTimeout(f, 0));
      // ring.classList.add('profile-ring-rotation-animation');
      // img.classList.add('counter-profile-ring-rotation-animation');
      // const ring: any = document.getElementById('.ring');
      // const img: any = document.getElementById('.profile-image');
      // const ring: any = document.querySelector(
      //   '.profile-ring-rotation-animation'
      // );
      // const img: any = document.querySelector(
      //   '.counter-profile-ring-rotation-animation'
      // );
      // new Promise(async (resolve, reject) => {
      //   // await img.classList.remove('counter-profile-ring-rotation-animation');
      //   // console.log(ring.classList);
      //   // const ring: any = document.getElementById('ring');
      //   // const img: any = document.getElementById('profile-image');
      //   // ring.classList.toggle('profile-ring-rotation-animation');
      //   // img.classList.toggle('counter-profile-ring-rotation-animation');
      //   // ring.classList.toggle('profile-ring-rotation-animation');
      //   // img.classList.toggle('counter-profile-ring-rotation-animation');
      //   // ring.classList.remove('profile-ring-rotation-animation');
      //   // img.classList.remove('counter-profile-ring-rotation-animation');
      //   // ring.offetWidth
      //   // ring.classList.add('profile-ring-rotation-animation');
      //   // img.classList.add('counter-profile-ring-rotation-animation');
      //   // console.log(ring.classList.value);
      //   resolve([ring, img]);
      // }).then(() => {
      //   // setTimeout(() => {
      //   //   const ring: any = document.getElementById('ring');
      //   //   const img: any = document.getElementById('profile-image');
      //   //   if (!ring.classList.contains('profile-ring-rotation-animation')) {
      //   //     ring.classList.add('profile-ring-rotation-animation');
      //   //     console.log(ring.classList.value);
      //   //   } else {
      //   //     console.log('alread exitss');
      //   //   }
      //   //   if (
      //   //     !img.classList.contains('counter-profile-ring-rotation-animation')
      //   //   ) {
      //   //     img.classList.add('counter-profile-ring-rotation-animation');
      //   //   }
      //   // }, 100);
      // });
      // new Promise(async (resolve, reject) => {
      //   await ring.classList.remove('profile-ring-rotation-animation');
      //   await img.classList.remove('counter-profile-ring-rotation-animation');
      //   console.log(ring.classList);
      //   resolve({ ring, img });
      // }).then(() => {
      //   ring.classList.add('profile-ring-rotation-animation');
      //   console.log(ring.classList);
      //   img.classList.add('counter-profile-ring-rotation-animation');
      // });
      // await ring.classList.remove('profile-ring-rotation-animation');
      // await img.classList.remove('counter-profile-ring-rotation-animation');
      // console.log(ring.classList);
      // await new Promise((f) => setTimeout(f, 0));
      // console.log(ring.classList);
      // ring.classList.add('profile-ring-rotation-animation');
      // console.log(ring.classList);
      // img.classList.add('counter-profile-ring-rotation-animation');
    })();
    console.log('asdasdsa');
  }
}
