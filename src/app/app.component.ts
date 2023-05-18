import { Component } from '@angular/core';
import { Person } from './model/person';
import { Subscription } from 'rxjs';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // students: Person[];
  // teachers: Person[];
  subscriptions = new Subscription();

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.reset();
    this.communicationService.requestStudents();
    // this.communicationService.requestTeachers();
    this.subscriptions.add(
      this.communicationService
        .waitForStudents()
        .subscribe((students: Person[]) => {
          // this.students = students;
        })
    );
    this.communicationService.requestTeachers();
    this.subscriptions.add(
      this.communicationService
        .waitForTeachers()
        .subscribe((teachers: Person[]) => {
          // this.teachers = teachers;
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
