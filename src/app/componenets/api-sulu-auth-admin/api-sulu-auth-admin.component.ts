import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-sulu-auth-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './api-sulu-auth-admin.component.html',
  styleUrl: './api-sulu-auth-admin.component.css'
})
export class ApiSuluAuthAdminComponent implements OnInit {

  pageData: any;
  pageId = '55d0367c-5738-40f5-995f-7fee88448374';
  locale = 'en';
  webspace = 'website';

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    // Appeler le service pour récupérer les données de la page
    this.service.getPageDataApiSulu(this.pageId, this.locale).subscribe(
      (response) => {
        console.log('Page Data sofuiane:', response);
        this.pageData = response;
      },
      (error) => {
        console.error('Error:', error); // Gérer les erreurs
      }
    );
  }

  // Méthode pour sauvegarder les modifications
  updatePage(): void {
    this.service.updatePageDataApiSulu(this.pageId, this.pageData, this.locale, this.webspace).subscribe(
      (response) => {
        console.log('Page updated successfully:', response);
        alert('Page mise à jour avec succès !');
      },
      (error) => {
        console.error('Error while updating page:', error);
        alert('Une erreur s\'est produite lors de la mise à jour de la page.');
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
