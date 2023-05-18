import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss'],
})
export class AttributeComponent implements OnInit {
  @Input() attributeIcons: string[] | undefined;
  @Input() attributeName: string | undefined;
  @Input() attributeValue: string | undefined;
  @Input() attributeType: string | undefined;
  @Input() colorPrimary: string | undefined;
  @Input() colorSecondary: string | undefined;
  nameTextSize: number;
  isColorValid: boolean;
  static TYPE_TEXT: string = 'Text';
  static TYPE_COLOR: string = 'Color';

  constructor() {}

  ngOnInit() {
    this.nameTextSize = (this.attributeName?.length || 0)>=26?15:17;
    this.isColorValid = this.isColor(this.attributeValue!);
  }

  isColor(color: string) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
  }
}
