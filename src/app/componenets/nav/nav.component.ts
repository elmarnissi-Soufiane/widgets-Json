import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../Services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  pageData: any; // To hold page data

  constructor(private widgetService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.widgetService.getPageData('nav').subscribe((data) => {
      this.pageData = data; // Set the page data for home

      console.log('data Nav', data);
    });
  }
}
