import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../model/person';
import { Router } from '@angular/router';

import { genderToColorTransparent } from '../logic/color';

@Component({
  selector: 'app-profile-card-item',
  templateUrl: './profile-card-item.component.html',
  styleUrls: ['./profile-card-item.component.scss'],
})
export class ProfileCardItemComponent implements OnInit {
  @Input() profile: Person | undefined;
  colorVariable: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setOpacityStuff();
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
