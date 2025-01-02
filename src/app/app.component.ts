import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceService } from './Services/service.service';

interface Widget {
  type: string;
  id: string;
  text?: string;
  placeholder?: string;
  options?: { value: string; text: string }[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  widgets: Widget[] = [];

  constructor(private widgetService: ServiceService) {}

  ngOnInit(): void {
    this.widgetService.getWidgets().subscribe(
      (data) => {
        this.widgets = data;
        console.log('data', data);
      },
      (error) => {
        console.error('Error loading widgets:', error);
      }
    );
  }
}
