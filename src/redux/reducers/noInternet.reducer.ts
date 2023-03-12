import { createReducer } from '@reduxjs/toolkit';
import { loadLoading, loadMore, loadNoInternet } from '../actions';

const initialState = false

const loadNoConnection = createReducer(initialState, builder => {
    builder
        .addCase(loadNoInternet, (state, action: any) => {
            return action.payload
        })
})

export { loadNoConnection }