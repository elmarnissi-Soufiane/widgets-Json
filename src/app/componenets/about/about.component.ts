import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  pageData: any; // To hold page data

  constructor(private widgetService: ServiceService) {}

  ngOnInit(): void {
    this.widgetService.getPageData('about').subscribe((data) => {
      this.pageData = data; // Set the page data for about
    });
  }
}
