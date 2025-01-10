import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';

@Component({
  selector: 'app-api-sulu-auth-admin',
  standalone: true,
  imports: [],
  templateUrl: './api-sulu-auth-admin.component.html',
  styleUrl: './api-sulu-auth-admin.component.css'
})
export class ApiSuluAuthAdminComponent implements OnInit {

  pageData: any; // Pour stocker les données de la page
  pageId = '55d0367c-5738-40f5-995f-7fee88448374'; // ID de la page
  locale = 'en'; // Langue

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    // Appeler le service pour récupérer les données de la page
    this.service.getPageDataApiSulu(this.pageId, this.locale).subscribe(
      (response) => {
        console.log('Page Data:', response);
        this.pageData = response; // Stocker les données de la page
      },
      (error) => {
        console.error('Error:', error); // Gérer les erreurs
      }
    );
  }

  // pageId = '55d0367c-5738-40f5-995f-7fee88448374';
  // locale = 'en';
  // webspace = 'website';
  // ngOnInit(): void {

  //   this.service.getPageDataSuluAuthAdmin(this.pageId, this.locale, this.webspace).subscribe({
  //     next: (data) => {
  //       this.pageData = data;
  //       console.log('Page Data:', data);
  //     },
  //     error: (err) => console.error('Error fetching page:', err),
  //   });

  // }
}
