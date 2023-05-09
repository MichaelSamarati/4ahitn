import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})
export class AttributeComponent implements OnInit {
  @Input() attributeIcon: string | undefined;
  @Input() attributeName: string | undefined;
  @Input() attributeValue: string | undefined;
  @Input() attributeType: string | undefined;

  static TYPE_TEXT: string = 'Text';
  static TYPE_COLOR: string = 'Color';

  constructor() {}

  ngOnInit() {}
}
