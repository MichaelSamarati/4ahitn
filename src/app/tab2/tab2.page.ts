import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { CommunicationService } from '../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, OnDestroy {
  students: Student[];
  subscriptions = new Subscription();

  constructor(private communicationService: CommunicationService) {
    this.students = [];
  }

  ngOnInit() {
    this.subscriptions.add(
      this.communicationService
        .waitForStudents()
        .subscribe((students: Student[]) => {
          this.students = students;
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

