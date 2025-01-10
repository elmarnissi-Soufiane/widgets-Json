import { Routes } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { AboutComponent } from './componenets/about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './componenets/contact/contact.component';
import { CheckoneComponent } from './componenets/checkone/checkone.component';
import { PageApiSuluComponent } from './componenets/page-api-sulu/page-api-sulu.component';
import { SuluApiJsonComponent } from './componenets/sulu-api-json/sulu-api-json.component';
import { ApiSuluAuthAdminComponent } from './componenets/api-sulu-auth-admin/api-sulu-auth-admin.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkone', component: CheckoneComponent },
  { path: 'api', component: PageApiSuluComponent },
  { path: 'apisulu', component: SuluApiJsonComponent },
  { path: 'suluApi', component: ApiSuluAuthAdminComponent },
];
