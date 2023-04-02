import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Student } from '../model/student';
import { CommunicationService } from '../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  profile: Student | undefined;
  private subscriptions = new Subscription();

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
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
