import { createSlice, createAction } from '@reduxjs/toolkit';
import { SEARCH_SCOPE } from './constants';

export const initialState = {
    books: null,
};

const searchSlice = createSlice({
    name: SEARCH_SCOPE,
    initialState,
    reducers: {
        setBooks(state, action) {
            console.log('test', 'slice radi');
            // console.log('test', action.payload);

        }
    }
});


export const searchBooksAction = createAction("search_books");

export const { setBooks } = searchSlice.actions;
export const { reducer } = searchSlice;