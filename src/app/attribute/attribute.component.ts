import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})
export class AttributeComponent implements OnInit {
  @Input() attributeName: string | undefined;
  @Input() attributeValue: string | undefined;
  @Input() attributeType: string | undefined;

  constructor() {}

  ngOnInit() {}
}
