import { Component } from '@angular/core';
import { STUDENT, Student } from '../model/student';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  students: Student[];

  //  constructor(private router: Router) {this.students = STUDENT}

  constructor() {
    this.students = STUDENT;
  }
}
