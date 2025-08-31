import { Injectable, inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { createEffect , Actions, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import {  tap, mergeMap, map, catchError } from 'rxjs/operators';

import { NewsService } from '../../services/news.service';

import { NewsInfo } from '../../models/news';

import { LoadNewsSection } from '../actions';

import * as fromActions from '../actions';

@Injectable()
export class NewsEffects {
  constructor(private actions$: Actions, private newsService: NewsService) {

  }

  loadNews$ = createEffect(() => {
      const effectObservable$ = this.actions$.pipe(
        ofType(fromActions.NewsActionTypes.LOAD_SECTION_NEWS), // watch action
        mergeMap((action: LoadNewsSection) => {
          const serviceResultObservable$ = this.newsService.getSectionNews(action.payload).pipe(
            map((news: any) => {
              return (new fromActions.LoadNewsSectionSuccess(news.results));
            }),
            catchError(error => of(new fromActions.LoadNewsSectionFailure(error)))
          );
          // serviceResultObservable is ready prepared now to return in mergeMap() method.
          return serviceResultObservable$;
        })
        // operators are over. now pipe() method is getting over.
      );
      // pipe() method is over. now effectObservable$ is ready to return to createEffect() method.
      return effectObservable$;
    }, { dispatch: true });
}
