import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

import { Student } from '../model/student';
import { CommunicationService } from '../services/communication.service';
import { Subscription } from 'rxjs';
import { Comment } from '../model/comment';
import { genderToColor, genderToColorDark, genderToColorDarkTransparent, genderToColorTransparent } from '../logic/color';
import { calculateAge } from '../logic/date';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  profile: Student | undefined;
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
        .subscribe(async (students: Student[]) => {
          this.profile = students.find(
            (x) => x.studentid == profileIdFromRoute
          );
          if (!this.profile) {
            return;
          }
          this.colorVariable = genderToColorTransparent(this.profile?.gender);
          this.colorVariableDark = genderToColorDarkTransparent(this.profile?.gender);
          this.profile.age = calculateAge(
            new Date(String(this.profile?.birthday))
          );
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

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    this.communicationService.requestComments(this.profile?.studentid);
  }
}
