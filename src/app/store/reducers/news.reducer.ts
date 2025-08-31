import { News } from "../../models/news";
import { NewsActions, NewsActionTypes } from "../actions/news.actions";

export const newsFeatureKey = 'news';

export interface NewsState {
    currentNewsSection: string,
    filterNewsSection: string,
    sectionNews: News[]
}

export const initialNewsState: NewsState = {
    currentNewsSection: '',
    filterNewsSection: '',
    sectionNews: []
}

export function newsReducer(state: NewsState = initialNewsState, action: NewsActions): NewsState {
    switch (action.type) {
        case NewsActionTypes.CURRENT_NEWS_SECTION:
            return {
                ...state,
                currentNewsSection: action.payload
            };
        case NewsActionTypes.LOAD_SECTION_NEWS_SUCCESS:
            return {
                ...state,
                filterNewsSection: '',
                sectionNews: action.payload
            };
        case NewsActionTypes.LOAD_SECTION_NEWS_FAILURE:
            return state;
        case NewsActionTypes.FILTER_SUB_SECTION:
            return {
                ...state,
                filterNewsSection: action.payload
            };
        default:
            return state;
    }
}
