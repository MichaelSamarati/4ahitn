import { Component } from '@angular/core';
import { Student } from './model/student';
import { Subscription } from 'rxjs';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  students: Student[];
  subscriptions = new Subscription();

  constructor(private communicationService: CommunicationService) {
    this.students = [];
  }

  ngOnInit() {
    this.communicationService.requestStudents();
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
