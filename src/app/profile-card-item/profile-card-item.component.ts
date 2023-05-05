import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-profile-card-item',
  templateUrl: './profile-card-item.component.html',
  styleUrls: ['./profile-card-item.component.scss'],
})
export class ProfileCardItemComponent implements OnInit {
  @Input() profile: Student | undefined;

  constructor() {}

  ngOnInit() {}
}
