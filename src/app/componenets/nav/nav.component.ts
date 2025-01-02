import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  switchToHome() {
    this.router.navigateByUrl('/home');
  }

  switchToAbout() {
    this.router.navigateByUrl('/about');
  }
}
