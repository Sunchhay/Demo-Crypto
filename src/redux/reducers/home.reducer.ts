import _ from 'lodash'
import { createReducer } from '@reduxjs/toolkit';
import { clearHome, loadHomeError, loadHomeSuccess } from '../actions/home';

const initialState = {
    listing: <any>[],
    data: null || <any>{},
};

const HomeReducer = createReducer(initialState, builder => {
    builder
        .addCase(clearHome, state => {
            state.data = []
        })
        .addCase(loadHomeSuccess, (state, action: any) => {
            state.data = action.payload
            // let _data = [...state.listing, ...action.payload.data]
            // let datas = _.uniqBy(_data, 'id')
            // state.listing = datas
        })
        .addCase(loadHomeError, (state, action) => {
            state.listing = []
            state.data = action.payload
        });
});

export { HomeReducer };