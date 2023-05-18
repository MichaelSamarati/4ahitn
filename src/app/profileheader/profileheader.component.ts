import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-profileheader',
  templateUrl: './profileheader.component.html',
  styleUrls: ['./profileheader.component.scss'],
})
export class ProfileheaderComponent implements OnInit {
  @Input() profile: Person | undefined;
  nameTextSize: number;

  constructor() {}

  ngOnInit() {
    this.nameTextSize =
      (this.profile?.forename.length || 0) +
        1 +
        (this.profile?.lastname.length || 0) >=
      20
        ? 20
        : 24;
  }
}
