import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { STUDENT, Student } from '../model/student';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: Student | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const profileIdFromRoute = routeParams.get('id');
    this.profile = STUDENT.find((profile) => profile.id === profileIdFromRoute);
  }
}
