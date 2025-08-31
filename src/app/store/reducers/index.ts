import * as sectionsPackage from './sections.reducer';
import * as newsPackage from './news.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    sections: sectionsPackage.SectionsState,
    news: newsPackage.NewsState
}

export const initialAppState: AppState = {
    sections: sectionsPackage.initialSectionsState,
    news: newsPackage.initialNewsState
}

export const reducers: ActionReducerMap<AppState> = {
  [newsPackage.newsFeatureKey]: newsPackage.newsReducer,
  [sectionsPackage.sectionsFeatureKey]: sectionsPackage.sectionsReducer,
};
