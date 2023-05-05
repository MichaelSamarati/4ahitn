import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent implements OnInit {
  stars: Star[];
  starCount: number;
  updateDeltaTime: number;
  constructor() {
    this.stars = [];
    this.starCount = 100;
    this.updateDeltaTime = 16;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    for (let i = 0; i < this.starCount; i++) {
      this.stars.push(new Star());
    }
    console.log(this.stars);
    setInterval(() => {
      for (let i = 0; i < this.stars.length; i++) {
        this.stars[i].update();
      }
    }, this.updateDeltaTime);
  }
}
class Star {
  x: number;
  y: number;
  z: number;
  static LEFT_WIDTH: number = -2000;
  static RIGHT_WIDTH: number = 2000;
  static TOP_HEIGHT: number = -2000;
  static BOTTOM_HEIGHT: number = 2000;
  static Z: number = 2000;

  constructor() {
    this.x = this.randomIntFromInterval(Star.LEFT_WIDTH, Star.RIGHT_WIDTH);
    this.y = this.randomIntFromInterval(Star.TOP_HEIGHT, Star.BOTTOM_HEIGHT);
    this.z = this.randomIntFromInterval(0, Star.Z);
  }

  update() {
    this.z -= 10;
    if (this.z <= 0.0) this.reset();
  }

  reset() {
    this.x = this.randomIntFromInterval(Star.LEFT_WIDTH, Star.RIGHT_WIDTH);
    this.y = this.randomIntFromInterval(Star.TOP_HEIGHT, Star.BOTTOM_HEIGHT);
    this.z = Star.Z;
  }

  getOffsetX(): number {
    let offsetX = 100.0 * (this.x / this.z);
    return offsetX;
  }

  getOffsetY(): number {
    let offsetY = 100.0 * (this.y / this.z);
    return offsetY;
  }

  getDiameter(): number {
    let scaleZ = 0.0025 * (Star.Z - this.z);
    return scaleZ;
  }

  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
