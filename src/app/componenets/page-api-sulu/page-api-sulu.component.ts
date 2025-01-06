import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-api-sulu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-api-sulu.component.html',
  styleUrl: './page-api-sulu.component.css'
})
export class PageApiSuluComponent implements OnInit {

  pageId = '0e6f6308-4eae-4fd4-8037-96b78bbc97ae'; // ID de la page que tu veux récupérer
  pageData: any;


  constructor(private service: ServiceService
  ) { }

  // ngOnInit(): void {
  //   this.service.getPageData(this.pageId).subscribe((data) => {
  //     this.pageData = data;
  //     console.log('Page data:', data);
  //   });
  // }

  // ngOnInit(): void {
  //   this.service.getPageDataApi().subscribe(
  //     (data) => {
  //       this.pageData = data;
  //       console.log('Data fetched:', this.pageData);
  //     },
  //     (error) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   );
  // }

  // Solution APi
  // ngOnInit(): void {
  //   // Appeler le service pour récupérer les données de la page
  //   this.service.getPageDataContentSulu().subscribe((data) => {
  //     this.pageData = data; // Assigner les données récupérées à pageData
  //     console.log('Données de la page:', data);
  //     console.log('Widgets de la page:', this.pageData.widgets);
  //   });
  // }

  ngOnInit(): void {
    const dynamicPart = 'team'; // Partie dynamique de l'URL

    this.service.getData(dynamicPart).subscribe({
      next: (response) => {
        this.pageData = response; // Stocke la réponse de l'API
        console.log(this.pageData); // Affiche les données dans la console
      },
      error: (error) => {
        console.error('Erreur lors de l\'appel API :', error);
      },
    });
  }

}
