import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  private jsonUrl = 'http://localhost:3000/widgets';

  constructor(private http: HttpClient) {}
  getWidgets(): Observable<Widget[]> {
    return this.http.get<Widget[]>(this.jsonUrl);
  }
}
