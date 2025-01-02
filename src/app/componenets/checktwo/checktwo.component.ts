import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartType, ChartData } from 'chart.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checktwo',
  standalone: true,
  imports: [NgChartsModule, CommonModule],
  templateUrl: './checktwo.component.html',
  styleUrls: ['./checktwo.component.css'],
})
export class ChecktwoComponent {
  // Données générales
  packSouscritsCes3 = 10;
  PacksActifs = 5;
  tPropositionsSauvegardes = 20;
  tTransformationsPacks = 8;
  rappel = 100;
  miseEnDemeure = 200;

  isPortefeuilleChartLoaded = true;
  isSecondChartLoader = true;
  isThirdChartLoader = true;

  // Doughnut Chart 1
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Label1', 'Label2', 'Label3'],
    datasets: [
      {
        data: [10, 15, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Doughnut Chart 2
  tdoughnutChartType: ChartType = 'doughnut';
  tdoughnutChartData: ChartData<'doughnut'> = {
    labels: ['Label A', 'Label B', 'Label C'],
    datasets: [
      {
        data: [5, 10, 15],
        backgroundColor: ['#66BB6A', '#FF7043', '#42A5F5'],
      },
    ],
  };

  // Doughnut Chart 3
  thirdDoughnutChartType: ChartType = 'doughnut';
  thirdDoughnutChartData: ChartData<'doughnut'> = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        data: [25, 35, 40],
        backgroundColor: ['#8E44AD', '#3498DB', '#E74C3C'],
      },
    ],
  };

  doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Désactiver le ratio pour personnaliser les dimensions
  };
}
