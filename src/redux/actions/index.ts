import { createAction } from '@reduxjs/toolkit';
import { AuthorizeParams, AuthorizeResponse } from '../actionTypes/authorize.type';

const loadMore = createAction<any>('loadMore');
const loadLoading = createAction<any>('loading');
const loadNoInternet = createAction<any>('noInternet');

const clearAuthorize = createAction<AuthorizeParams>('authorize/clear');
const requestAuthorize = createAction<AuthorizeParams>('authorize/request');
const loadAuthorizeSuccess = createAction<AuthorizeResponse>('authorize/success');
const loadAuthorizeError = createAction<AuthorizeResponse>('authorize/error');

export {
    loadNoInternet,
    loadMore,
    loadLoading,
    clearAuthorize,
    requestAuthorize,
    loadAuthorizeSuccess,
    loadAuthorizeError
};
