import { Component } from '@angular/core';
import { Student } from './model/student';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CommunicationService } from './services/communication.service';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  students: Student[];
  subscriptions = new Subscription();
  constructor(
    private communicationService: CommunicationService // private androidPermissions: AndroidPermissions
  ) {}

  ngOnInit() {
    this.communicationService.resetStudents();
    this.communicationService.requestStudents();
    this.subscriptions.add(
      this.communicationService
        .waitForStudents()
        .subscribe((students: Student[]) => {
          this.students = students;
        })
    );

    // this.androidPermissions.requestPermissions([
    //   this.androidPermissions.PERMISSION.INTERNET,
    // ]);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
