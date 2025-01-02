import { Widget } from './../../Services/service.service';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  pageData: any; // To hold page data

  constructor(private widgetService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.widgetService.getPageData('home').subscribe((data) => {
      this.pageData = data; // Set the page data for home

      console.log('data home', data);
      console.log('data home widgets', data.widgets);
      this.pageData.widgets.forEach((widget: any) => {
        if (widget.type === 'section') {
          console.log('Section found Home: ', widget);
          console.log('Section found Home widegts: ', widget.widgets);
        }
      });
    });
  }
}
