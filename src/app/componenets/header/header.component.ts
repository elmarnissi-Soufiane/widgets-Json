import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn = true;
  firstName = "soufiane";
  lastName = "Elmarnissi";
  title = "Title One header";

  constructor() { }
  ngOnInit(): void {
      
  }

  logout() {
    console.log('Logout ! ');
  }
}
