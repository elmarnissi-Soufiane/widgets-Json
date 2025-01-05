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

  ngOnInit(): void {
    this.service.getPageData(this.pageId).subscribe((data) => {
      this.pageData = data;
      console.log('Page data:', data);
    });
  }

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

  // ngOnInit(): void {
  //   // Appeler le service pour récupérer les données de la page
  //   this.service.getPageData().subscribe((data) => {
  //     this.pageData = data; // Assigner les données récupérées à pageData
  //     console.log('Données de la page:', data);
  //     console.log('Widgets de la page:', this.pageData.widgets);

  //     // Vérifier les widgets et afficher ceux de type "section"
  //     if (this.pageData && this.pageData.widgets) {
  //       this.pageData.widgets.forEach((widget: any) => {
  //         if (widget.type === 'section') {
  //           console.log('Section trouvée:', widget);
  //           console.log('Widgets dans la section:', widget.widgets);
  //         }
  //       });
  //     }
  //   });
  // }

}
