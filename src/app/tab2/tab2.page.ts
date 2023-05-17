import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { CommunicationService } from '../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  students: Student[];
  subscription = new Subscription();

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.initialeActiveStudents();
    this.subscription = this.communicationService
      .getActiveStudents()
      .subscribe((students: Student[]) => {
        this.students = students;
      });
  }
}
