import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pointless-text-toggle',
  templateUrl: './pointless-text-toggle.component.html',
  styleUrls: ['./pointless-text-toggle.component.css']
})
export class PointlessTextToggleComponent implements OnInit {
  textToggle = false;

  currentIndex = 0;
  pointlessListOfNumbers = [];

  constructor() { }

  ngOnInit() {
  }

  toggleText() {
    this.textToggle =! this.textToggle;
    this.pointlessListOfNumbers.push(this.currentIndex++);
  }

  isSpecial(i) {
    return i > 4;
  }
}
