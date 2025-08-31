import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';

export const routes: Routes = [
  { path: 'section/:section', component: NewsComponent },
  { path: '', redirectTo: 'section/home', pathMatch: 'full' }
];
