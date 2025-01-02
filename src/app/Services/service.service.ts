import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

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
  private jsonUrl = 'http://localhost:3000/pages';

  constructor(private http: HttpClient) {}
  // getWidgets(): Observable<Widget[]> {
  //   return this.http.get<Widget[]>(this.jsonUrl);
  // }

  // Method to get data for a specific page
  // getPageData(pageId: string): Observable<any> {
  //   return this.http.get('/assets/widgets.json').pipe(
  //     map((data: any) => data.find((page: any) => page.id === pageId)) // Find the page by ID
  //   );
  // }

  // Method to get data for a specific page from the API
  getPageData(pageId: string): Observable<any> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      map((data: any) => data.find((page: any) => page.id === pageId)) // Find the page by ID
    );
  }
}
