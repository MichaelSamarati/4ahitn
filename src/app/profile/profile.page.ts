import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

import { Person } from '../model/person';
import { CommunicationService } from '../services/communication.service';
import { Subscription } from 'rxjs';
import { Comment } from '../model/comment';
import {
  genderToColorDarkTransparent,
  genderToColorTransparent,
} from '../logic/color';
import { calculateAge } from '../logic/date';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  profile: Person | undefined;
  comments: Comment[] | undefined;
  subscriptions = new Subscription();
  colorVariable: string;
  colorVariableDark: string;

  constructor(
    private route: ActivatedRoute,
    private communicationService: CommunicationService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const profileIdFromRoute = routeParams.get('id');
    this.subscriptions.add(
      this.communicationService
        .waitForStudents()
        .subscribe(async (persons: Person[]) => {
          if (!this.profile) {
            this.profile = persons.find(
              (x) => x.personid == profileIdFromRoute
            );
            if (!this.profile) {
              return;
            } else {
              this.initValues(this.profile);
            }
          }
        })
    );
    this.subscriptions.add(
      this.communicationService
        .waitForTeachers()
        .subscribe(async (persons: Person[]) => {
          if (!this.profile) {
            this.profile = persons.find(
              (x) => x.personid == profileIdFromRoute
            );
            if (!this.profile) {
              return;
            } else {
              this.initValues(this.profile);
            }
          }
        })
    );
    this.communicationService.requestComments(profileIdFromRoute);
    this.subscriptions.add(
      this.communicationService
        .waitForComments()
        .subscribe((comments: Comment[]) => {
          this.comments = comments;
        })
    );
  }

  initValues(person: Person) {
    this.colorVariable = genderToColorTransparent(person.gender);
    this.colorVariableDark = genderToColorDarkTransparent(person.gender);
    if (!person.age) {
      try {
        person.age = calculateAge(new Date(String(person.birthday)));
      } catch (e) {}
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    this.communicationService.requestComments(this.profile?.personid);
  }
}
