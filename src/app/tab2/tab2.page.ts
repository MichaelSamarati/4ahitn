import { Component } from '@angular/core';
import { STUDENT, StudentModel } from '../model/studentModel';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  students: StudentModel[]
  test: string="ASD"
  
  constructor() {this.students = STUDENT}

}
