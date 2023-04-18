import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

import { Student } from '../model/student';
import { CommunicationService } from '../services/communication.service';
import { Subscription } from 'rxjs';
import { Comment } from '../model/comment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  profile: Student | undefined;
  comments: Comment[] | undefined;
  subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private communicationService: CommunicationService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const profileIdFromRoute = routeParams.get('id');
    this.communicationService.requestStudent(profileIdFromRoute);
    this.subscriptions.add(
      this.communicationService
        .waitForStudent()
        .subscribe((student: Student) => {
          this.profile = student;
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
