import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-profileheader',
  templateUrl: './profileheader.component.html',
  styleUrls: ['./profileheader.component.scss'],
})
export class ProfileheaderComponent implements OnInit {
  @Input() profile: Student | undefined;

  constructor() {}

  ngOnInit() {}
}
