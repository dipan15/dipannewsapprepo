import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

import { Subject, Observable, of} from 'rxjs';
import { tap, mergeMap, map, catchError, takeUntil } from 'rxjs/operators';

import { News } from '../../models/news';
import { NewsItemComponent } from './news-item/news-item.component';

import { AppState } from '../../store/reducers';
import { getFilterSubSection } from '../../store/selectors/news.selectors';
import { getNewsSection } from '../../store/selectors/news.selectors';
import * as fromActions from '../../store/actions';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'nyt-news',
  imports: [NgFor, NewsItemComponent],
  standalone: true,
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  sectionNews: News[] = [];
  unsubscribe: Subject<void> = new Subject();

  constructor(private store: Store<AppState>,
    private route: ActivatedRoute, private newsService: NewsService) {
    }

  ngOnInit() {
    this.initSubscriptions();
  }

  ngDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  initSubscriptions(): void {
    this.route.paramMap
      .pipe(takeUntil(this.unsubscribe))
    .subscribe(params => {
        this.store.dispatch(new fromActions.LoadNewsSection(params.get('section')));
      });

    this.store.pipe(select(getFilterSubSection))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((sectionNewsData) => {
        this.sectionNews = sectionNewsData;
        }
      );

  }

}
