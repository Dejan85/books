import { put, call, takeLatest } from 'redux-saga/effects';
import { searchBooksAction, setBooks } from './slice';


function* searchSaga() {
    console.log('test', 'radi');
    // try {
    //     yield setBooks('test');

    // } catch (err) {
    //     console.log('test', err);
    // }
};


export default function* watchSearch() {
    yield takeLatest(searchBooksAction.type, searchSaga);
};

