import { Routes } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { AboutComponent } from './componenets/about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './componenets/contact/contact.component';

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
  {
    path: 'contact',
    component: ContactComponent,
  },
];
