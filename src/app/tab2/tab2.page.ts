import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { CommunicationService } from '../services/communication.service';
import { Subscription } from 'rxjs';
import {trigger,state,style,animate,transition}from '@angular/animations';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  animations: [
    trigger('visibilityAnimation', [
      state('visible', 
        style({ opacity: 1})
      ),
      state('invisible', 
        style({ opacity: 0 })
      ),
      transition('visible <=> invisible', [
        animate('0.5s ease-out')
      ]), 
    ])]
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
