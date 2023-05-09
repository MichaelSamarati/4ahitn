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
    
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
