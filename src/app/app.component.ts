import { Component, OnInit } from '@angular/core';
import { ServiceService } from './Services/service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from './componenets/nav/nav.component';

interface Widget {
  type: string;
  id: string;
  text?: string;
  placeholder?: string;
  options?: { value: string; text: string }[];
  css?: { [key: string]: string }; // Store CSS styles here
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, NavComponent],
})
export class AppComponent implements OnInit {
  //widgets: Widget[] = [];

  constructor(private widgetService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    // this.widgetService.getWidgets().subscribe(
    //   (data) => {
    //     this.widgets = data;
    //     console.log('data widgets : ', data);
    //   },
    //   (error) => {
    //     console.error('Error loading widgets:', error);
    //   }
    // );
  }
}
