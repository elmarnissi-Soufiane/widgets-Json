import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, throwError } from 'rxjs';

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

  private apiUrlSulu = 'http://localhost:8000/bnjr-tous';
  getPageDataSulu(): Observable<any> {
    return this.http.get<any>(this.apiUrlSulu);
  }


  // with cookie

  private apiUrlSuluAuth = 'http://localhost:8000/admin/api/pages';
  // Méthode pour récupérer les données d'une page spécifique
  getPageDataApiSulu(pageId: string, locale: string): Observable<any> {
    const url = `${this.apiUrlSuluAuth}/${pageId}?locale=${locale}`;
    return this.http.get(url, {
      withCredentials: true, // Inclure les cookies pour l'authentification
    });
  }

  // update 
  // Méthode PUT pour mettre à jour les données
  updatePageDataApiSulu(pageId: string, updatedData: any, locale: string, webspace: string): Observable<any> {
    const url = `${this.apiUrlSuluAuth}/${pageId}?locale=${locale}&webspace=${webspace}`;
    return this.http.put(url, updatedData, {
      withCredentials: true, // Inclure les cookies pour l'authentification
    });
  }

  // //private apiUrlSuluAuth = 'http://localhost:8000/admin/api/pages/55d0367c-5738-40f5-995f-7fee88448374?locale=en';
  // // getPageDataSuluAuthAdmin(): Observable<any> {
  // //   return this.http.get<any>(this.apiUrlSuluAuth);
  // // }
  // private baseUrlAdmin = 'http://localhost:8000/admin/api/pages';
  // private token = '1892c9d1bc5f209145b7420a0dbdfbb2';
  // // GET Page
  // getPageDataSuluAuthAdmin(pageId: string, locale: string, webspace: string): Observable<any> {
  //   if (!this.token) {
  //     console.error('Authorization token is missing!');
  //     return new Observable((observer) => {
  //       observer.error('Authorization token is missing!');
  //       observer.complete();
  //     });
  //   }

  //   const url = `${this.baseUrlAdmin}/${pageId}?locale=${locale}&webspace=${webspace}`;
  //   return this.http.get(url, {
  //     headers: this.getHeaders(),
  //   });
  // }

  // // PUT Page
  // updatePage(pageId: string, data: any, locale: string, webspace: string): Observable<any> {
  //   const url = `${this.baseUrlAdmin}/${pageId}?locale=${locale}&webspace=${webspace}&action=publish`;
  //   return this.http.put(url, data, {
  //     headers: this.getHeaders(),
  //   });
  // }

  // // POST Preview Update
  // updatePreview(pageId: string, locale: string, webspace: string): Observable<any> {
  //   const url = `http://localhost:8000/admin/preview/update?locale=${locale}&webspaceKey=${webspace}&provider=pages&id=${pageId}`;
  //   return this.http.post(url, null, {
  //     headers: this.getHeaders(),
  //   });
  // }

  // private getHeaders(): HttpHeaders {
  //   return new HttpHeaders({
  //     Authorization: `Bearer ${this.token}`,
  //     'Content-Type': 'application/json',
  //   });
  // }

}
