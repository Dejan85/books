// import { createSelector } from 'reselect';
// import { ApplicationRootState } from 'types';
import { initialState } from './slice';
import { SEARCH_SCOPE } from './constants';

/**
 * Native selectors
 */
export const getBooksState = (state) => {
    return state[SEARCH_SCOPE] || initialState;
};
