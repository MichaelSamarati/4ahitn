import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moving-background',
  templateUrl: './moving-background.component.html',
  styleUrls: ['./moving-background.component.scss'],
})
export class MovingBackgroundComponent implements OnInit {
  circles: Circle[];
  circleCount: number;
  updateDeltaTime: number;
  @Input() color: string ;
  constructor() {
    this.circles = [];
    this.circleCount = 150;
    this.updateDeltaTime = 16;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    let w = document.body.clientWidth;
    let h = document.body.clientHeight;
    for (let i = 0; i < this.circleCount; i++) {
      this.circles.push(
        new Circle(w || 0, h || 0, i % 2 ? 'rgb(241, 241, 241)' : this.color)
      );
    }
    setInterval(() => {
      for (let i = 0; i < this.circles.length; i++) {
        this.circles[i].update();
      }
    }, this.updateDeltaTime);
  }

  getColor(): string {
    return this.color;
  }
}
class Circle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  x2: number;
  y2: number;
  progress: number;
  color: string;
  static OPACITY_MIN: number = 5;
  static OPACITY_MAX: number = 30;
  static DISTANCE_MIN: number = 150;
  static DISTANCE_MAX: number = 400;
  static SIZE_MIN: number = 5;
  static SIZE_MAX: number = 30;

  constructor(w: number, h: number, color: string) {
    this.x = this.randomIntFromInterval(-w / 2, w / 2);
    this.y = this.randomIntFromInterval(-h / 2, h / 2);
    this.size = this.randomIntFromInterval(Circle.SIZE_MIN, Circle.SIZE_MAX);
    this.opacity = this.randomIntFromInterval(
      Circle.OPACITY_MIN,
      Circle.OPACITY_MAX
    );
    let randomAngle = this.randomIntFromInterval(0, 360);
    let randomDistance = this.randomIntFromInterval(
      Circle.DISTANCE_MIN,
      Circle.DISTANCE_MAX
    );
    this.x2 = randomDistance * Math.cos(randomAngle);
    this.y2 = randomDistance * Math.sin(randomAngle);
    if (randomAngle >= 180) {
      this.x2 = -this.x2;
    }
    this.progress = this.randomIntFromInterval(0, 100);
    this.color = color;
  }

  update() {
    this.progress = (this.progress + 0.5) % 100;
  }

  getOffsetX(): number {
    let xDiff = this.x - this.x2;
    let offsetX = (xDiff * this.progress) / 100 + this.x;
    return offsetX;
  }

  getOffsetY(): number {
    let yDiff = this.y - this.y2;
    let offsetY = (yDiff * this.progress) / 100 + this.y;
    return offsetY;
  }

  getDiameter(): number {
    return this.size;
  }

  getOpacity(): number {
    return this.opacity;
  }

  getColor(): string {
    return this.color;
  }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
