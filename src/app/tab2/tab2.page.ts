import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { CommunicationService } from '../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, OnDestroy {
  availableStudents: Student[];
  students: Student[];
  subscriptions = new Subscription();
  range: number;

  constructor(private communicationService: CommunicationService) {
    this.clear();
  }

  ngOnInit() {
    this.clear();
    this.communicationService.requestStudents();
    this.subscriptions.add(
      this.communicationService
        .waitForStudents()
        .subscribe((students: Student[]) => {
          this.availableStudents = students;
        })
    );
    setTimeout(() => {
      let interval = setInterval(() => {
        if (this.range > 50) {
          clearInterval(interval);
          return;
        }
        if (this.availableStudents[this.range]) {
          this.students.push(this.availableStudents[this.range]);
          this.range++;
        }
      }, 150);
    }, 50);
  }

  clear(){
    this.availableStudents = [];
    this.students = [];
    this.range = 0;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
