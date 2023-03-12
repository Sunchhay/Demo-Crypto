import { createReducer } from '@reduxjs/toolkit';
import { loadLoading, loadMore } from '../actions';

const initialState = false

const loadMoreReducer = createReducer(initialState, builder => {
    builder
        .addCase(loadMore, (state, action: any) => {
            return action.payload
        })
})

export { loadMoreReducer }