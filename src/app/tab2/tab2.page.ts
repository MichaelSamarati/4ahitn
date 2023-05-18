import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { CommunicationService } from '../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  students: Person[];
  teachers: Person[];
  subscriptions = new Subscription();

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.initiateActiveStudents();
    this.subscriptions.add(
      this.communicationService
        .getActiveStudents()
        .subscribe((students: Person[]) => {
          this.students = students;
        })
    );
    this.subscriptions.add(
      this.communicationService
        .areStudentsFinished()
        .subscribe((areStudentsFinished: boolean) => {
          if (areStudentsFinished) {
            this.communicationService.initiateActiveTeachers();
          }
        })
    );
    this.subscriptions.add(
      this.communicationService
        .getActiveTeachers()
        .subscribe((teachers: Person[]) => {
          this.teachers = teachers;
        })
    );
  }
}
