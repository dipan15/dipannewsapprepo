import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { News } from '../../models/news';

import { AppState } from '../../store/reducers';
import { getNewsSection } from '../../store/selectors/news.selectors';
import * as fromActions from '../../store/actions';

@Component({
  selector: 'nyt-navbar',
  imports: [NgIf, NgFor],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  sectionNews: News[] = [];
  currentSubSection: string = '';
  subSectionsNavItems: string[] = [];
  unsubscribe: Subject<void> = new Subject();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.initSubscriptions();
  }

  initSubscriptions(): void {

    this.store.pipe(select(getNewsSection))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        sectionNews => {
          this.currentSubSection = '';
          this.subSectionsNavItems = [];
          for (const item of sectionNews) {
            if (item.subsection.length && !this.subSectionsNavItems.includes(item.subsection)) {
              this.subSectionsNavItems.push(item.subsection);
            }
          }
        }
      );

  }

  /**
   * @param filter - subsection string
   */
  filterNews(filter: string): void {
    this.currentSubSection = filter;
    this.store.dispatch(new fromActions.FilterSubSection(filter));
  }

}
