import { Routes } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { AboutComponent } from './componenets/about/about.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
