import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sulu-api-json',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sulu-api-json.component.html',
  styleUrl: './sulu-api-json.component.css'
})
export class SuluApiJsonComponent implements OnInit {

  pageData: any;
  isLoading: boolean = true;
  error: string | null = null;


  constructor(private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.service.getPageDataSulu().subscribe({
      next: (data) => {
        this.pageData = data;
        this.isLoading = false;
        console.log('data', data);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des données de la page:', err);
        this.error = 'Échec du chargement des données.';
        this.isLoading = false;
      }
    });
  }

}
