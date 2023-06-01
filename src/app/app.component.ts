import { Component } from '@angular/core';
import { Person } from './model/person';
import { Subscription } from 'rxjs';
import { CommunicationService } from './services/communication.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  subscriptions = new Subscription();

  constructor(
    private socket: Socket,
    private communicationService: CommunicationService
  ) {}

  ngOnInit() {
    this.communicationService.reset();
    this.communicationService.requestStudents();
    this.subscriptions.add(
      this.communicationService
        .waitForStudents()
        .subscribe((students: Person[]) => {
        })
    );
    this.communicationService.requestTeachers();
    this.subscriptions.add(
      this.communicationService
        .waitForTeachers()
        .subscribe((teachers: Person[]) => {
        })
    );
    this.communicationService.waitForDisconnect();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.socket.disconnect();
  }
}
