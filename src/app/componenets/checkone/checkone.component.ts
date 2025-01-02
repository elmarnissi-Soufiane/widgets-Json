import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkone.component.html',
  styleUrl: './checkone.component.css',
})
export class CheckoneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  isActiveBtn = true;
  activateTab = 1;

  clearStepDataAndMove() {
    console.log('Clearing step data and moving to the next step.');
  }

  updateTab(tabNumber: number) {
    this.activateTab = tabNumber;
    console.log(`Tab updated to: ${tabNumber}`);
  }
}
