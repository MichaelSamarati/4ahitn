import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../model/student';
import { Router } from '@angular/router';

import { genderToColor, genderToColorTransparent } from '../logic/color';

@Component({
  selector: 'app-profile-card-item',
  templateUrl: './profile-card-item.component.html',
  styleUrls: ['./profile-card-item.component.scss'],
})
export class ProfileCardItemComponent implements OnInit {
  @Input() profile: Student | undefined;
  colorVariable: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setOpacityStuff();
    // this.router.events.subscribe((val) => {
    //   const profileCardItemComponents = document.getElementsByClassName(
    //     'profileCardItemComponent'
    //   );
    //   for (let i = 0; i < profileCardItemComponents.length; i++) {
    //     let c = profileCardItemComponents[i];
    //     c.classList.add('opacity-0');
    //     c.addEventListener(
    //       'animationend',
    //       () => {
    //         c.classList.remove('opacity-0');
    //       },
    //       { once: true }
    //     );
    //   }
    // });

    this.colorVariable = genderToColorTransparent(this.profile?.gender);
  }

  setOpacityStuff() {
    const profileCardItemComponents = document.getElementsByClassName(
      'profileCardItemComponent'
    );
    for (let i = 0; i < profileCardItemComponents.length; i++) {
      let c = profileCardItemComponents[i];
      c.addEventListener(
        'animationend',
        () => {
          c.classList.remove('opacity-0');
        },
        { once: true }
      );
    }
  }
}
