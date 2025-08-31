import { SectionsActions, SectionsActionTypes } from '../actions/sections.actions';

export const sectionsFeatureKey = 'sections';

export interface SectionsState {
    allSections: Array<string>;
    currentSection: string;
}

export const initialSectionsState: SectionsState = {
    allSections: [
        'home',
        'opinion',
        'world',
        'national',
        'politics',
        'business',
        'technology',
        'science',
        'health',
        'sports',
        'arts',
        'books',
        'movies',
        'theater',
        'fashion',
        'food',
        'travel',
        'magazine',
        'realestate',
        'automobiles'
    ],
    currentSection: 'home'
}

export function sectionsReducer(state: SectionsState = initialSectionsState, action: SectionsActions): SectionsState {
    switch (action.type) {
        case SectionsActionTypes.LOAD_SECTIONS:
            return state;
        case SectionsActionTypes.SET_CURRENT_SECTION:
            return {
                ...state,
                currentSection: action.payload
            };
        default:
            return state;
    }
}
