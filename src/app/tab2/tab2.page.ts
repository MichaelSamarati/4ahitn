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
  persons: Person[];
  subscription = new Subscription();

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.initiateActivePersons();
    this.subscription = this.communicationService
      .getActivePersons()
      .subscribe((persons: Person[]) => {
        this.persons = persons;
      });
  }
}
