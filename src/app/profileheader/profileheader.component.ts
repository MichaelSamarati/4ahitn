import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-profileheader',
  templateUrl: './profileheader.component.html',
  styleUrls: ['./profileheader.component.scss'],
})
export class ProfileheaderComponent implements OnInit {
  @Input() profile: Person | undefined;

  constructor() {}

  ngOnInit() {}
}
