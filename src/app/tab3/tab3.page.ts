import { Component } from '@angular/core';
import { STUDENT, StudentModel } from '../model/studentModel';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  students: StudentModel[]
  test: string="ASD"
  
  constructor() {this.students = STUDENT}

}
