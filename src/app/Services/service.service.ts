import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';

export interface Widget {
  type: string;
  id: string;
  text?: string;
  placeholder?: string;
  options?: { value: string; text: string }[];
  css?: { [key: string]: string }; // CSS styles for the widget
}

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  //private jsonUrl = 'http://localhost:3000';
  private jsonUrl = 'http://localhost:3000/pages';

  constructor(private http: HttpClient) { }

  //Method to get data for a specific page from the API
  getPageData(pageId: string): Observable<any> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      map((data: any) => data.find((page: any) => page.id === pageId)) // Find the page by ID
    );
  }

  // getWidgets(): Observable<Widget[]> {
  //   return this.http.get<Widget[]>(this.jsonUrl);
  // }

  // Method to get data for a specific page
  // getPageData(pageId: string): Observable<any> {
  //   return this.http.get('/assets/widgets.json').pipe(
  //     map((data: any) => data.find((page: any) => page.id === pageId)) // Find the page by ID
  //   );
  // }



  // URL de l'API du backend
  //private apiUrl = 'http://localhost:8000/json-response';
  // private apiUrl = 'http://localhost:8000/hello-titile-one-from-fatima';

  // // Récupérer les données de la page depuis l'API
  // getPageDataContentSulu(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }

  private baseUrl = 'http://localhost:8000';
  // Fonction pour appeler une API avec une partie dynamique
  getData(dynamicPart: string): Observable<any> {
    const url = `${this.baseUrl}/${dynamicPart}`; // Construction de l'URL dynamique
    return this.http.get(url); // Appel HTTP GET
  }

  // getPageDataApi(): Observable<any> {
  //   return this.http.get(`${this.jsonUrl}/page`);
  // }
  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('Client-side error:', error.error.message);
  //   } else {
  //     console.error(`Server-side error: ${error.status} - ${error.message}`);
  //   }
  //   return throwError(() => new Error('An error occurred; please try again later.'));
  // }

}
