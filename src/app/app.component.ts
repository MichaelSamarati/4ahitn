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
  persons: Person[];
  subscriptions = new Subscription();
  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.resetStudents();
    this.communicationService.requestStudents();
    this.subscriptions.add(
      this.communicationService
        .waitForPersons()
        .subscribe((persons: Person[]) => {
          this.persons = persons;
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
