import { Component, OnInit } from '@angular/core';
import { ServiceService } from './Services/service.service';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
})
export class AppComponent implements OnInit {
  widgets: Widget[] = [];

  constructor(private widgetService: ServiceService) {}

  ngOnInit(): void {
    this.widgetService.getWidgets().subscribe(
      (data) => {
        this.widgets = data;
        console.log('data widgets : ', data);
      },
      (error) => {
        console.error('Error loading widgets:', error);
      }
    );
  }
}
