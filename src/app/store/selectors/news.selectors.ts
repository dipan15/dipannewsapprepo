import { createSelector } from '@ngrx/store';
import { selectNewsState } from './index';
import { News } from '../../models/news';

/**
 * Get News Section Selector
 */
export const getNewsSection = createSelector(
    selectNewsState,
    news => {
      return news.sectionNews;
    }
)

/**
 * Get Filter SubSection Section Selector
 */
export const getFilterSubSection = createSelector(
    selectNewsState,
    news => news.sectionNews.filter((item: News) => {
        if (!news.filterNewsSection.length) {
            return item;
        } else {
            if (item.subsection === news.filterNewsSection) {
                return item;
            }
        }
    })
)

/**
 * Get Current News Section Selector
 */
export const getCurrentNewsSection = createSelector(
    selectNewsState,
    news => news.currentNewsSection
)
