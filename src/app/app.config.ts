import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';

import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { provideHttpClient, withFetch } from '@angular/common/http';

import { NewsService } from './services/news.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionsComponent } from './components/sections/sections.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { NewsItemComponent } from './components/news/news-item/news-item.component';

import { reducers } from './store/reducers';
import { NewsEffects } from './store/effects/news.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    NewsService,
    provideStore(reducers),
    provideEffects([NewsEffects])
  ]
};
