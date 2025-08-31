import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, from, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { NewsInfo } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiURL: string = '';
  constructor(private http: HttpClient) {
  }

  /**
   * @param section - section
   */
  getSectionNews(section: string): Observable<NewsInfo> {
    this.apiURL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=315a5a51483b469a918246dc2753b339`;
    return this.http.get<NewsInfo>(this.apiURL)
      .pipe(
        catchError(this.handleError)
      );
  }


  /**
   * @param err - error
   */
  handleError(err: any) {
    let errorMessage: string = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Error has occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend has returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
