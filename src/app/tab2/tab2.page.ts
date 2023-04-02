import { Component } from '@angular/core';
import { STUDENT, Student } from '../model/student';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  students: Student[];

  constructor() {
    this.students = STUDENT;
  }
}
